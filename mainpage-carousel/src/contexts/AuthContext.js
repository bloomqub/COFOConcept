//import { onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
<<<<<<< Updated upstream
import { auth } from '../contexts/firebase'
import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail } from "firebase/auth";
=======
import { auth } from '../firebase'
import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail, sendEmailVerification } from "firebase/auth";
import { getDatabase, set, ref, push } from 'firebase/database';
>>>>>>> Stashed changes

const AuthContext = React.createContext()

// allows us to use auth context function
export function useAuth(){
    return useContext(AuthContext)  
}

// returns the values we want to provide for authentication
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)  //verification to see if there is already user

    // cretes a user instance when signup occurs
<<<<<<< Updated upstream
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password) 
=======
    function signup(email, password, firstName, lastName, number) {
       // sendEmailVerification(auth.currentUser)
         //   .then(() => {
           //     alert("Email verification sent!")
            //})
            const db = getDatabase()
            push(ref(db, 'users/' ), {
                email: email,
                name: firstName && lastName,
                number: number

            })

        return auth.createUserWithEmailAndPassword(email, password, firstName, lastName, number) 
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

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

>>>>>>> Stashed changes
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
