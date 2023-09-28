import React from 'react'
import Styles from '../Favorites/Favorites.module.css'
import Search from '../../components/Search/Search'

const Favorites = () => {
  return (
    <div className={Styles.favorites}>
        <Search/>
        <h1>Favorites</h1>
    </div>
  )
}

export default Favorites