import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export const LogoutPage = () => {

  const { logoutUser } = useContext(AuthContext)

  return (
    <div>
      { logoutUser() }
    </div>
  )
}
