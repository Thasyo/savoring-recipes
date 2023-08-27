import React from 'react'

import styles from '../MenuOptionProfileOn/MenuOptionProfileOn.module.css'

import { NavLink } from 'react-router-dom'

const MenuOptionProfileOn = () => {
  return (
    <div className={styles.menuOptionProfileOn}>
        <div>
            <NavLink>Editar Perfil</NavLink>
            <NavLink>Favoritos</NavLink>
            <NavLink>Sair</NavLink>
        </div>
    </div>
  )
}

export default MenuOptionProfileOn