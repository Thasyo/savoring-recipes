import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Donate/Donate.module.css'

const Donate = () => {
  return (
    <div className={styles.donate}>
      <Search/>
      <h1>Doações</h1>
    </div>
  )
}

export default Donate