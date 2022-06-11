import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }: any) {
  const location = useLocation()

  return Cookies.get('auth') ? (
    children
  ) : (
    <Navigate to='/basic-auth' replace state={{ from: location }} />
  )
}

export default PrivateRoute
