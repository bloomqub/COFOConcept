import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // checks to see if passwords match when signing up throws error if they do not
    function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match")
        }
    
        const promises = []
        setError('')
        setLoading(true)

        if (emailRef.current.value !== currentUser.email) {
            //calling update email function with current email if our email changes
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
           
        }
        //runs once all promisems run if they are succesful
        Promise.all(promises).then(() => {
            navigate("/")
        }).catch(() => {
            setError("Failed to update account")
        }).finally(() => {
            setLoading(false)
        })

    }
    function handleGoBack() {
        navigate(-1);
    }

  return (
    <>
     
        <Card className='wholecard'>
        <div className=''>
        <Button onClick={handleGoBack}>Back</Button>
        </div>
        <Container>
            <Card.Body class>
                <h2 className='text-center mb-4'>Update Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert> }
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef}  placeholder='Leave blank to keep the same' />
                    </Form.Group>
                    <Form.Group id ="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef}  placeholder='Leave blank to keep the same'/>
                    </Form.Group>
                    <Button disabled = {loading} className="w-100 mt-2" type="submit">Update</Button>
                </Form>  
            </Card.Body>
            </Container>
        </Card> 
        <div className='w-100 text-center mt-2'>
             <Link to="/">Cancel</Link>
        </div> 
    </>
    
  )
}
