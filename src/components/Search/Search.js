import React from 'react'

import styles from '../Search/Search.module.css'

import { IoSearchCircleSharp } from "react-icons/io5";

import MenuOptionProfileOff from '../../components/MenuOptionProfileOff/MenuOptionProfileOff'
/* import MenuOptionProfileOn from '../../components/MenuOptionProfileOn/MenuOptionProfileOn' */

const Search = () => {

  return (
    <div className={styles.search}>
        <form>
            <input type="text" placeholder='O que você deseja cozinhar?' />
            <IoSearchCircleSharp className={styles.iconSearch}/>
        </form>
        <MenuOptionProfileOff/>
        {/* {<MenuOptionProfileOn/>} */}

    </div>
  )
}

export default Search