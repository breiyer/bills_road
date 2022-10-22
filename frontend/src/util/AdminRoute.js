import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const AdminRoute = () => {
  const { user } = useContext(AuthContext)

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user && user.is_staff ? <Outlet /> : <Navigate to="/home" />
}

export default AdminRoute
