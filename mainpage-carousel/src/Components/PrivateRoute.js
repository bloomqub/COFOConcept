import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
//creating a wrapper for our current route

export default function PrivateRoute({ children }) {

  const { currentUser } = useAuth()

  return currentUser ? children: <Navigate to="/login"/>
}
