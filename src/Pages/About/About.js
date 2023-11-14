import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../About/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <Search/>
      <h1><span className={styles.titleBorderCategory}>t</span> About</h1>
      <div className={styles.container}>
        <div>
          <p>Savoring Recipes is a growing website that aims to provide an unforgettable experience for its users with recipes from many different cultures and countries.</p>
        </div>

        <div>
          <p>Among our objectives, the main ones are:</p>
        </div>

        <div>
          <ul>
            <li>Help our users learn to cook in practice in a simple and enjoyable way;</li>
            <li>Contribute to the growth of the gastronomic community;</li>
            <li>To be the largest globally known culinary community;</li>
          </ul>
        </div>

        <div>
          <p>Savoring Recipes was born in 2023, with the aim of adding value and making the gastronomic world more exciting, making all types of recipes accessible.</p>
        </div>

        <div>
          <p>Welcome to our community, feel free and let's move forward!</p>
        </div>
        
      </div>
    </div>
  )
}

export default About