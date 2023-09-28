import React from 'react'

import { CgProfile } from "react-icons/cg";

import styles from '../MenuOptionProfileOff/MenuOptionProfileOff.module.css'

import { NavLink } from 'react-router-dom'

import { useCategoriesVisibleContext } from '../../context/CategoriesVisible';


const MenuOptionProfileOff = () => {

  const {isVisibleProfile, setIsVisibleProfile} = useCategoriesVisibleContext();

  const toggleVisible = () => {
    setIsVisibleProfile(!isVisibleProfile);
  }

  return (
    <div>
      <CgProfile className={styles.iconProfile} onClick={() => toggleVisible()}/>
      <div className={isVisibleProfile ? styles.menuOptionProfileOff : styles.none}>
        <div>
            <NavLink to='/login' onClick={() => toggleVisible()}>Login</NavLink>
            <NavLink to='/register' onClick={() => toggleVisible()}>Register</NavLink>
        </div>
    </div>
    </div>
  )
}

export default MenuOptionProfileOff