//styles
import styles from './Header.module.css'

//assets
import logo from '../../assets/logo.png'

//components
import Navbar from '../Navbar/Navbar'

import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <NavLink to='/'><img src={logo} alt="logo da saboreando receitas" /></NavLink>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header