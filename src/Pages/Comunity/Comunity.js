import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Comunity/Comunity.module.css'

const Comunity = () => {
  return (
    <div className={styles.comunity}>
      <Search/>
      <h1><span className={styles.titleBorderCategory}>t</span> ChefZando</h1>
      <div className={styles.container}>

        <div>
          <h2>Welcome to our community page!</h2>
        </div>

        <div>
          <h4>Our community allows you to interact and connect with everyone who loves cooking.</h4>
        </div>

        <div>
          <h4>Create your account at ChefZando and check out all the benefits!</h4>
        </div>

        <div>
          <ul>
            <li>Post and promote your recipes</li>
            <li>Browse the world of all types of cuisine</li>
            <li>Interact with other users' posts</li>
            <li>Learn new recipes</li>
            <li>Improve yourself every day in the gastronomic world</li>
          </ul>
        </div>

        <div>
          <p>ACCESS THE LINK BELOW AND ENJOY!</p>
        </div>

        <div>
          <a href="#" target='_blank' className={styles.btn}>Community</a>
        </div>

      </div>
    </div>
  )
}

export default Comunity