import React, { useState } from 'react'

import styles from '../Search/Search.module.css'

import { IoSearchCircleSharp } from "react-icons/io5";

import MenuOptionProfileOff from '../../components/MenuOptionProfileOff/MenuOptionProfileOff'
import MenuOptionProfileOn from '../../components/MenuOptionProfileOn/MenuOptionProfileOn'

import { useAuthValue } from '../../context/AuthContext';

const Search = () => {

  const [search, setSearch] = useState('');
  const {user} = useAuthValue()

  console.log(search)

  return (
    <div className={styles.search}>
        <form>
            <input type="text" placeholder='What do you want to cook?' onChange={(e) => setSearch(e.target.value)}/>
            <IoSearchCircleSharp className={styles.iconSearch}/>
        </form>
        {!user ? (<MenuOptionProfileOff/>) : (<MenuOptionProfileOn/>)}
    </div>
  )
}

export default Search