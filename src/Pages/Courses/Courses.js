import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Courses/Courses.module.css'

const Courses = () => {
  return (
    <div className={styles.courses}>
      <Search/>
      <h1>Courses</h1>
    </div>
  )
}

export default Courses