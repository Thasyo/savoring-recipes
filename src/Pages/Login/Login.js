import React from 'react'

import styles from '../Login/Login.module.css'
import Search from '../../components/Search/Search'

const Login = () => {
  return (
    <div className={styles.login}>
      <Search/>
        <h1>Login</h1>
    </div>
  )
}

export default Login