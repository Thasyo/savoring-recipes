//react/hooks/router dom
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthetication';

//styles
import styles from '../Register/Register.module.css'

//assets
import bgRegister from '../../assets/bg-register-and-login.jpg'
import { IoLogIn } from "react-icons/io5";

//components
import Search from '../../components/Search/Search'

const Register = () => {

    //states do form
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError('As senhas precisam ser iguais!')
            return
        } 

        const response = await createUser(user)

        console.log(response)

        setDisplayName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <Search/>
            <img src={bgRegister} alt="imagem de fundo da page de cadastro" />
            <div className={styles.infoRegister}>
                <h1><IoLogIn className={styles.iconRegisteTitle}/> Cadastrar</h1>
                <div>
                    <p>Crie uma conta e aproveite os serviços da Saboreando Receitas. Monte uma lista de receitas favoritas, envie comentários, participe da nossa Comunidade Chefzando e interaja com todos os usuários, divulgando e postando receitas, visitando receitas dos outros usuários e muito mais!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome</span>
                        <input type="text" name='displayName' required placeholder='Digite o seu nome...' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Digite o seu email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <span>Senha</span>
                        <input type="password" name='password' required placeholder='Insira a sua senha...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>

                    <label className={styles.lastLabel}>
                        <span>Confirmação de Senha</span>
                        <input type="password" name='confirmPassword' required placeholder='Confirme a sua senha...' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {error && <p className='error'>{error}</p>}
                    </label>

                    {!loading && <button className={styles.btnRegister}>Cadastrar</button>}
                    {loading && <button className={styles.btnRegister} disabled>Aguarde...</button>}
                    
                </form>

                <span className={styles.existLogin}>
                    <p>Já tem uma conta? </p>
                    <NavLink to='/login'><button>Entrar</button></NavLink>
                </span>

                <div>
                    <p>A Saboreando Recitas processa os dados coletados para a criação da sua área de usuário e da comunidade Chefzando. Para saber mais sobre como gerenciar seus dados pessoais e exercer seus direitos, consulte nossa Política de Proteção de Dados Pessoais.</p>
                </div>
            </div>
    </div>
  )
}

export default Register