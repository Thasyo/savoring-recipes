import React from 'react'

import styles from '../Search/Search.module.css'

import { IoSearchCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Search = () => {
  return (
    <div className={styles.search}>
        <form>
            <input type="text" placeholder='O que você deseja cozinhar?' />
            <IoSearchCircleSharp className={styles.iconSearch}/>
        </form>
        <CgProfile className={styles.iconProfile}/>

    </div>
  )
}

export default Search