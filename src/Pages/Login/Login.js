//react/hooks/router dom
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthetication';

import styles from '../Login/Login.module.css'

//assets
import bgRegister from '../../assets/bg-register-and-login.jpg'
import { IoLogIn } from "react-icons/io5";

//components
import Search from '../../components/Search/Search'

const Login = () => {

  //states do form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()

      setError('')

      const user = {
          email,
          password
      }

      const response = await login(user)

      console.log(response)

      alert("Email de recuperação de senha enviado com sucesso!")

      setEmail("")
      setPassword("")
    
  }

  useEffect(() => {
      if(authError){
          setError(authError)
      }
  }, [authError])

  return (
    <div className={styles.login}>
      <Search/>
      <img src={bgRegister} alt="imagem de fundo da page de cadastro" />
      <div className={styles.infoLogin}>
                <h1><IoLogIn className={styles.iconLoginTitle}/>LOGIN</h1>
                <form onSubmit={handleSubmit}>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Your email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <span>Password</span>
                        <input type="password" name='password' required placeholder='Your password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {error && <p className='error'>{error}</p>}
                    </label>

                    <span className={styles.forgetPassword}>
                      <NavLink to="/forgotPassword"><p>Forgot your password?</p></NavLink>
                    </span>

                    {!loading && <button className={styles.btnLogin}>Enter</button>}
                    {loading && <button className={styles.btnLogin} disabled  >Wait...</button>}
                    
                </form>

                <span className={styles.existLogin}>
                    <p>Don't have an account? </p>
                    <NavLink to='/register'><button>Create one</button></NavLink>
                </span>

            </div>
    </div>
  )
}

export default Login