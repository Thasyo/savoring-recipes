import React, { useState, useEffect } from 'react'

import styles from '../ForgotPassword/ForgotPassword.module.css'

import Search from '../../components/Search/Search'

import { IoLogIn } from 'react-icons/io5'

import { useAuthentication } from '../../hooks/useAuthetication'

import bgRegister from '../../assets/bg-register-and-login.jpg'


const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const {forgotPassword, error: authError, loading} = useAuthentication()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setError('')

        const response = await forgotPassword(email);

        console.log(response)

        setEmail("")
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])


  return (
    <div className={styles.forgotPassword}>
        <Search/>
        <img src={bgRegister} alt="imagem de fundo da page de cadastro" />
        <div className={styles.infoForgotPassword}>
                <h1><IoLogIn className={styles.iconForgotPasswordTitle}/> Esqueceu sua senha?</h1>
                <div>
                    <p>Para redefinir sua senha, digite aqui seu endereço de e-mail.</p>
                </div>
                <form onSubmit={handleSubmit}>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Digite o seu email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {error && <p className='error'>{error}</p>}
                    </label>



                    {!loading && <button className={styles.btnForgotPassword}>Enviar</button>}
                    {loading && <button className={styles.btnForgotPassword} disabled  >Aguarde...</button>}
                    
                </form>
        </div>
    </div>
  )
}

export default ForgotPassword