import React from 'react'

import styles from '../Search/Search.module.css'

import { IoSearchCircleSharp } from "react-icons/io5";

import MenuOptionProfileOff from '../../components/MenuOptionProfileOff/MenuOptionProfileOff'
import MenuOptionProfileOn from '../../components/MenuOptionProfileOn/MenuOptionProfileOn'

import { useAuthValue } from '../../context/AuthContext';

const Search = () => {

  const {user} = useAuthValue()

  return (
    <div className={styles.search}>
        <form>
            <input type="text" placeholder='What do you want to cook?' />
            <IoSearchCircleSharp className={styles.iconSearch}/>
        </form>
        {!user ? (<MenuOptionProfileOff/>) : (<MenuOptionProfileOn/>)}
    </div>
  )
}

export default Search