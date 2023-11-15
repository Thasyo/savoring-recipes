import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../Support/Support.module.css'


const Support = () => {
  return (
    <div className={styles.suport}>
      <Search/>
      <h1><span className={styles.titleBorderCategory}>t</span> About</h1>
      <div className={styles.container}>
        <div className={styles.subtitle}>
          <p>
            Your opinions, questions, criticisms, compliments and suggestions are very important to our team. All messages received are read and help us improve the services we offer. However, we ask for your understanding that due to the large number of emails received daily, it is not always possible for us to offer individual support to all website users.
          </p>
        </div>

        <div className={styles.contact}>
          <div>
            <p>To get in touch with opinions, questions, criticisms, compliments and feature suggestions, send an email to <a href="#">Aqui vai ficar o email</a></p>
          </div>
          <div>
            <p>For commercial contacts, send an email to <a href="#">Aqui vai ficar o email</a></p>
          </div>
          <div>
            <p>Regarding your personal data and privacy, send an email to <a href="#">Aqui vai ficar o email</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support