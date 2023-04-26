import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
//creating a wrapper for our current route

export default function PrivateRouteLS({ children }) {

  const { currentUser } = useAuth()

  return !currentUser ? children: <Navigate to="/"/>
}
