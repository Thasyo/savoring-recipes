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
                <h1><IoLogIn className={styles.iconRegisteTitle}/> REGISTER</h1>
                <div>
                    <p>Create an account and take advantage of Saboreando Recipes services. Create a list of favorite recipes, send comments, participate in our Chefzando Community and interact with all users, promoting and posting recipes, visiting other users' recipes and much more!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input type="text" name='displayName' required placeholder='Your name...' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Your email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <span>Password</span>
                        <input type="password" name='password' required placeholder='Your password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>

                    <label className={styles.lastLabel}>
                        <span>Password Confirmation</span>
                        <input type="password" name='confirmPassword' required placeholder='Confirm your password...' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {error && <p className='error'>{error}</p>}
                    </label>

                    {!loading && <button className={styles.btnRegister}>Register</button>}
                    {loading && <button className={styles.btnRegister} disabled>Wait...</button>}
                    
                </form>

                <span className={styles.existLogin}>
                    <p>Already have an account? </p>
                    <NavLink to='/login'><button>Login</button></NavLink>
                </span>

                <div>
                    <p>Saboreando Recipes processes the data collected to create its user area and the Chefzando community. To learn more about how to manage your personal data and exercise your rights, see our Personal Data Protection Policy.</p>
                </div>
            </div>
    </div>
  )
}

export default Register