//import { onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail, sendEmailVerification, getIdToken } from "firebase/auth";
import { getDatabase, set, ref, push } from 'firebase/database';
import emailjs from "emailjs-com";

const AuthContext = React.createContext()
//const uid = auth.currentUser.uid
// email service and template IDs for sending email
const serviceId = "service_88f6uzo";
const templateId = "template_8c5ns17";
const userId = "cbHVCN5PjSJiOARoO";

// allows us to use auth context function
export function useAuth(){
    return useContext(AuthContext)  
}

// returns the values we want to provide for authentication
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)  //verification to see if there is already user
    //const [signedIn, setSignedIn] = useState(false) 
    
    // cretes a user instance when signup occurs

    function signup(email, password, firstName, lastName, number, userID) {
       // sendEmailVerification(auth.currentUser)
         //   .then(() => {
           //     alert("Email verification sent!")
            //})
            const db = getDatabase()
            push(ref(db, 'users/' ), {
                email: email,
                firstName: firstName,
                lastName: lastName,
                number: number,
            })

            // emailjs
			// 	.send(serviceId, templateId, userId)
			// 	.then(function (response) {
			// 		console.log("SUCCESS!", response.status, response.text)
			// 	})
			// 	.catch(function (error) { // if email fails to send
			// 		console.log("FAILED...", error);
			// 	});

        return auth.createUserWithEmailAndPassword(email, password, firstName, lastName, number) 
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function emailConfirmation() {
        return auth.currentUser.sendEmailVerification()
    }

    function addUser(email) {
        const db = getDatabase()
        //const reference = ref(db, 'users/')
        
        push(ref(db, 'users/' ), {
            email: email
        })
    }

    useEffect(() => {
        //allows us to set the user
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }  

    return (
        // makes sure not to render application until the user is set in useEffect
        <AuthContext.Provider value= {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
