import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../CustomRecipes/CustomRecipes.module.css'

const CustomRecipes = () => {
  return (
    <div className={styles.customRecipes}>
      <Search/>
      <h1>Receitas Customizadas</h1>
    </div>
  )
}

export default CustomRecipes