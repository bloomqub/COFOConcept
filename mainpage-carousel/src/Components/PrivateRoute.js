import React from 'react'
import { redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
//creating a wrapper for our current route

export default function PrivateRoute({component: Component, ...rest}) {

  const { currentUser } = useAuth()

  return (
    <Route
        {...rest}
        render = {props => {
          //render this component only if we have a current user
          return currentUser ? <Component {...props} /> : <redirect to ="/login" />
        }}
    >
    </Route>
  )
}
