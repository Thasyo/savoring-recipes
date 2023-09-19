import React from 'react'

import { CgProfile } from "react-icons/cg";

import styles from '../MenuOptionProfileOn/MenuOptionProfileOn.module.css'

import { NavLink } from 'react-router-dom'

import { useCategoriesVisibleContext } from '../../context/CategoriesVisible';

import { useAuthentication } from '../../hooks/useAuthetication';

const MenuOptionProfileOn = () => {

  const {isVisibleProfile, setIsVisibleProfile} = useCategoriesVisibleContext();

  const toggleVisible = () => {
    setIsVisibleProfile(!isVisibleProfile);
  } 

  const { logout } = useAuthentication();

  const handleLogout = () => {
    logout()
    toggleVisible()
  }

  return (
    <div>
      <CgProfile className={styles.iconProfile} onClick={() => toggleVisible()}/>
      <div className={isVisibleProfile ? styles.menuOptionProfileOn : styles.none}>
          <div>
              <NavLink to='/editProfile' onClick={() => toggleVisible()}>Editar Perfil</NavLink>
              <NavLink to='/favorites' onClick={() => toggleVisible()}>Favoritos</NavLink>
              <NavLink to='/' onClick={handleLogout}>Sair</NavLink>
          </div>
      </div>
    </div>
  )
}

export default MenuOptionProfileOn