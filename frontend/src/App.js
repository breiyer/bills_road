import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { AddPlacePage } from './pages/AddPlacePage'
import { ViewAllPlacesPage } from './pages/ViewAllPlacesPage'
import { PasswordRecoveryPage } from './pages/PasswordRecoveryPage'
import { PasswordResetPage } from './pages/PasswordResetPage'
import { NotFoundPage } from './pages/NotFoundPage'
import PrivateRoute from './util/PrivateRoute'
import AdminRoute from './util/AdminRoute'
import { AuthProvider } from './context/AuthContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/base.css'
import './css/normalize.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthProvider />} path="/">
          <Route element={<AdminRoute />} path="/add/place" exact>
            <Route element={<AddPlacePage />} path="/add/place" exact></Route>
          </Route>

          <Route element={<PrivateRoute />} path="/home" exact>
            <Route element={<ViewAllPlacesPage />} path="/home" exact></Route>
          </Route>

          <Route element={<LoginPage />} path="/login" exact></Route>
          <Route element={<LogoutPage />} path="/logout" exact></Route>
        </Route>


        <Route element={<PasswordRecoveryPage />} path="/password/recovery" exact></Route>
        <Route element={<PasswordResetPage />} path="/password/reset/:token" exact></Route>

        <Route element={<Navigate to="/login" replace />} path="/" exact></Route>
        <Route element={<NotFoundPage />} path="*" exact></Route>
      </Routes>

    </Router>
  )
}

export default App
