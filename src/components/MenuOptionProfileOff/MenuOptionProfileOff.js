import React from 'react'

import styles from '../MenuOptionProfileOff/MenuOptionProfileOff.module.css'

import { NavLink } from 'react-router-dom'


const MenuOptionProfileOff = () => {
  return (
    <div className={styles.menuOptionProfileOff}>
        <div>
            <NavLink>Login</NavLink>
            <NavLink>Cadastro</NavLink>
        </div>
    </div>
  )
}

export default MenuOptionProfileOff