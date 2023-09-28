import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    sendPasswordResetEmail
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    //cleanUp
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const checkIfIsCancelled = () => {
        if(cancelled){
            return
        }
    }

    //função de registro
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
    
            setLoading(false)

            return user

        }catch(error){

            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes('Password')){
                systemErrorMessage = 'Password must contain at least 6 characters.'
            }else if(error.message.includes('email-already')){
                systemErrorMessage = 'E-mail already registered!'
            }else{
                systemErrorMessage = 'An error occurred, please try again later.'
            }

            setError(systemErrorMessage)

        }

        setLoading(false)
    }

    //função de logout
    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

    //função de Login
    const login = async(data) => {

        checkIfIsCancelled(true)

        setLoading(true)
        setError(null)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)


        } catch (error) {

            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = 'User not found.'
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = 'Incorrect password. Try again.'
            }else{
                systemErrorMessage = 'An error occurred, please try again later.'
            }

            setError(systemErrorMessage)
            setLoading(false)

        }

    }

    //função de redefinição de senha
    const forgotPassword = async(email) => {

        checkIfIsCancelled(true)

        setLoading(true)
        setError(null)

        try {

            await sendPasswordResetEmail(auth, email)
            setLoading(false)
            
        } catch (error) {

            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = 'User not found.'
            }else{
                systemErrorMessage = 'An error occurred, please try again later.'
            }

            setError(systemErrorMessage)
            setLoading(false)
            
        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
        forgotPassword
    }

}