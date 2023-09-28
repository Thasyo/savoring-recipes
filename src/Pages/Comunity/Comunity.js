import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Comunity/Comunity.module.css'

const Comunity = () => {
  return (
    <div className={styles.comunity}>
      <Search/>
      <h1>Comunity</h1>
    </div>
  )
}

export default Comunity