import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import "./CSSPages/Signup.css";
import logo from "../cofo-img/CoFoLogo.png";
import { auth } from '../firebase';

export default function Signup() {
    const firstNameRef = useRef()  
    const lastNameRef = useRef()
    const numberRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const user = auth.currentUser
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // checks to see if passwords match when signing up throws error if they do not
    async function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password does not match")
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value, numberRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    function handleGoBack() {
        navigate("/");
    }

  return (
    <>
   
        <Button className="back-btn" onClick={handleGoBack}>Back</Button>
        <Card className="wholecard">
            <Card.Body>
                <div className='logo-container'>
                <img src={logo} alt="Logo" style={{ width: "200px", marginBottom: "2rem" }} />
            </div>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert> }
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder= "Johnny" ref={firstNameRef} required />
                    </Form.Group>
                    <Form.Group id ="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder= "Appleseed" ref={lastNameRef} required />
                    </Form.Group>
                    <Form.Group id ="number">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder= "(XXX)XXX-XXXX" ref={numberRef} required />
                    </Form.Group>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder= "johnnyappleseed@gmail.com" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder = "Password must be at least 6 characters" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id ="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" placeholder = "Confirm Password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled = {loading} className="w-100 mt-2" type="submit">Sign Up</Button>
                </Form>  
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/login">Log In</Link>
        </div> 
    </>
    
  )
}
