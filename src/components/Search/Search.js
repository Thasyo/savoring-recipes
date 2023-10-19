import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import styles from '../Search/Search.module.css'

import { IoSearchCircleSharp } from "react-icons/io5";

import MenuOptionProfileOff from '../../components/MenuOptionProfileOff/MenuOptionProfileOff'
import MenuOptionProfileOn from '../../components/MenuOptionProfileOn/MenuOptionProfileOn'

import { useAuthValue } from '../../context/AuthContext';

const Search = () => {

  const [search, setSearch] = useState('');
  const {user} = useAuthValue()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${search}`)
  }

  return (
    <div className={styles.search}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='What do you want to cook?' onChange={(e) => setSearch(e.target.value)}/>
            <IoSearchCircleSharp className={styles.iconSearch} onClick={() => navigate(`/${search}`)}/>
        </form>
        {!user ? (<MenuOptionProfileOff/>) : (<MenuOptionProfileOn/>)}
    </div>
  )
}

export default Search