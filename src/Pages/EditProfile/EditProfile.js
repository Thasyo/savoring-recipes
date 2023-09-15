import React from 'react'
import Styles from '../EditProfile/EditProfile.module.css'
import Search from '../../components/Search/Search'

const EditProfile = () => {
  return (
    <div className={Styles.editProfile}>
        <Search/>
        <h1>Editar Perfil</h1>
    </div>
  )
}

export default EditProfile