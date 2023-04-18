import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import loggedIn from "../Pages/Login";
import "./CSSPages/Profile.css";

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/')
            loggedIn = false;
        } catch {
            setError('Failed to log out')
        }
    } 
    function handleGoBack() {
        navigate(-1);
    }

  return (
    <>
        <Card>
        <div className=''>
        <Button onClick={handleGoBack}>Back</Button>
        </div>
            <Card.Body>
                <h2 className='text-center mb-4'>Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert> }
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className='btn btn-primary w-100 mt-10'> Update Profile</Link>
            </Card.Body>
        </Card>
        <div className='logout-btn'>
        <div className='w-100 text-center mt-2'>
            <Button onClick={handleLogout}>Log Out </Button>
        </div> 
        </div>
    </>
  )
}
