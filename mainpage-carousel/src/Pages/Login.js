import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory, useNavigate } from 'react-router-dom'

var loggedIn = false;

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // checks to see if passwords match when signing up throws error if they do not
    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            loggedIn = true;
            navigate("/")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }
    function handleGoBack() {
        navigate("/");
    }

  return (
    <>
        <div className=''>
        <Button onClick={handleGoBack}>Back</Button>
        </div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert> }
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled = {loading} className="w-100 mt-2" type="submit">Log in</Button>
                </Form>  
                <div className='w-100 text-center mt-2'>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Don't have an Account? <Link to="/signup">Sign Up </Link>
        </div> 
    </>
    
  )
}