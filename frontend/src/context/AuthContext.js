import { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { API_BASE_URL, ACCESS_TOKEN_LIFETIME } from '../env'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = () => {

  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  const [loading, setLoading] = useState(true)
  
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()

    const requestBody = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    const response = await fetch(`${API_BASE_URL}api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify(requestBody)
    })
    const data = await response.json()

    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      navigate('/home')
    } else {
      alert(data.detail)
    }
  }

  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
  }

  const updateToken = async () => {

    const response = await fetch(`${API_BASE_URL}api/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'refresh': authTokens?.refresh })
    })

    const data = await response.json()

    if (response.status === 200) {
      // console.log(JSON.parse(localStorage.getItem('authTokens')), data, 'PPP')
      const newAuthTokens = { ...JSON.parse(localStorage.getItem('authTokens')), ...data }
      // console.log(newAuthTokens, 'nAT')

      setAuthTokens(newAuthTokens)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(newAuthTokens))
    } else {
      logoutUser()
    }

    if (loading) setLoading(false)
  }

  const contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
  }

  useEffect(() => {
    if (loading) updateToken()

    const refreshInterval = 1000 * 60 * ACCESS_TOKEN_LIFETIME

    const interval = setInterval(() => {
      if (authTokens) updateToken()
    }, refreshInterval)
    return () => clearInterval(interval)

  }, [authTokens, loading])


  return (
    <AuthContext.Provider value={contextData}>
      <Outlet />
    </AuthContext.Provider>
  )
}
