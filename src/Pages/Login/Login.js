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
                <h1><IoLogIn className={styles.iconLoginTitle}/> Entrar</h1>
                <form onSubmit={handleSubmit}>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Digite o seu email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <span>Senha</span>
                        <input type="password" name='password' required placeholder='Insira a sua senha...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {error && <p className='error'>{error}</p>}
                    </label>

                    <span className={styles.forgetPassword}>
                      <NavLink><p>Esqueci minha senha</p></NavLink>
                    </span>

                    {!loading && <button className={styles.btnLogin}>Entrar</button>}
                    {loading && <button className={styles.btnLogin} disabled  >Aguarde...</button>}
                    
                </form>

                <span className={styles.existLogin}>
                    <p>Não tem uma conta? </p>
                    <NavLink to='/register'><button>Criar uma</button></NavLink>
                </span>

            </div>
    </div>
  )
}

export default Login