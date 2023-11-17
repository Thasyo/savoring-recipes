import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Donate/Donate.module.css'
import { AiFillHeart } from "react-icons/ai";


const Donate = () => {
  return (
    <div className={styles.donate}>
      <Search/>
      <h1><span className={styles.titleBorderCategory}>t</span> Donate</h1>
      <div className={styles.container}>
        <h2>Did you like our website and all the services we provide?</h2>
        <div className={styles.supportHeart}>
          <h3>Support our services through a donation</h3>
          <AiFillHeart className={styles.AiFillHeart}/>
        </div>
        <div className={styles.descriptionDonate}>
          <p>Through donations, you help us maintain all services on our website and our ChefZando community.</p>
          <p>Thank you in advance for your contribution to the Savoring Recipes team!</p>
        </div>
        <button className={styles.btn}><span>Donate</span> <AiFillHeart className={styles.AiFillHeartBtn}/></button>
      </div>
    </div>
  )
}

export default Donate