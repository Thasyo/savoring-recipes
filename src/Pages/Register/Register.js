//react
import React from 'react'
import { NavLink } from 'react-router-dom';

//styles
import styles from '../Register/Register.module.css'

//assets
import bgRegister from '../../assets/bg-register-and-login.jpg'
import { IoLogIn } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

//components
import Search from '../../components/Search/Search'

const Register = () => {
  return (
    <div className={styles.register}>
        <Search/>
            <img src={bgRegister} alt="imagem de fundo da page de cadastro" />
            <div className={styles.infoRegister}>
                <h1><IoLogIn className={styles.iconRegisteTitle}/> Cadastrar</h1>
                <div>
                    <p>Crie uma conta e aproveite os serviços da Saboreando Receitas. Monte uma lista de receitas favoritas, envie comentários, participe da nossa Comunidade Chefzando e interaja com todos os usuários, divulgando e postando receitas, visitando receitas dos outros usuários e muito mais!</p>
                </div>
                <form>
                    <label>
                        <span>Nome</span>
                        <input type="text" name='displayName' required placeholder='Digite o seu nome...'/>
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="email" name='email' required placeholder='Digite o seu email...'/>
                    </label>

                    <label>
                        <span>Senha</span>
                        <input type="password" name='password' required placeholder='Insira a sua senha...'/>
                    </label>

                    <label className={styles.lastLabel}>
                        <span>Confirmação de Senha</span>
                        <input type="password" name='confirmPassword' required placeholder='Confirme a sua senha...'/>
                    </label>

                    <button className={styles.btnRegister}>Cadastrar</button>
                    
                </form>

                <button className={styles.btnRegisterGoogle}> <FcGoogle className={styles.FcGoogle}/> Cadastrar com o Google</button>

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