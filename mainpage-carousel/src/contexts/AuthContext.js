//import { onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../contexts/firebase'
import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail, sendEmailVerification } from "firebase/auth";
import { getDatabase, set, ref, push } from 'firebase/database';

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
    function signup(email, password) {
       // sendEmailVerification(auth.currentUser)
         //   .then(() => {
           //     alert("Email verification sent!")
            //})

        return auth.createUserWithEmailAndPassword(email, password) 
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
        const reference = ref(db, 'users/')
        
        push(reference, {
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
        updatePassword,
        emailConfirmation,
        addUser
    }  

    return (
        // makes sure not to render application until the user is set in useEffect
        <AuthContext.Provider value= {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
