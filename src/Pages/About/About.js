import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../About/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <Search/>
      <h1>About</h1>
    </div>
  )
}

export default About