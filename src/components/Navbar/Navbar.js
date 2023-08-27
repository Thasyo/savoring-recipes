//styles 
import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { GiCookingPot, GiCook, GiDiploma, GiHeartBeats} from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { BiSolidRightArrow } from "react-icons/bi";

import { useCategoriesVisibleContext } from '../../context/CategoriesVisible';

const Navbar = () => {

  const {isVisible, setIsVisible} = useCategoriesVisibleContext();

  const toogleCategories = () => {
    setIsVisible(!isVisible);
  }

  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillHome className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/> Página Inicial</NavLink>
        <NavLink className={styles.link} onClick={() => toogleCategories()}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Receitas <BiSolidRightArrow className={(isVisible ? styles.animationArrow : styles.iconNavBarArrow)}/></NavLink>
        <div className={isVisible ? styles.categories : styles.none}>
          <div>
            <h2> <span className='title-border'></span>Tipos de Refeições</h2>
            <ul>
              <NavLink>Café da manhã</NavLink>
              <NavLink>Entradas</NavLink>
              <NavLink>Acompanhamentos</NavLink>
              <NavLink>Diversos</NavLink>
              <NavLink>Sobremesa</NavLink>
              <NavLink>Massas</NavLink>
              <NavLink>Frutos do Mar</NavLink>
              <NavLink>Vegana</NavLink>
              <NavLink>Vegetariana</NavLink>
            </ul>
          </div>

          <div>
            <h2> <span className='title-border'></span>Tipos de Carnes</h2>
            <ul>
              <NavLink> <span className={styles.borderCategories}></span> Carne Bovina</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Carne de Frango</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Carne de Cabra</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Carne de Cordeiro</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Carne de Porco</NavLink>
            </ul>
          </div>
        </div>
        <NavLink to='/customRecipes' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Receitas Customizadas</NavLink>
        <NavLink to='/comunity' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCook className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Comunidade</NavLink>
        <NavLink to='/courses' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiDiploma className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Cursos</NavLink>
        <NavLink to='/donate' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiHeartBeats className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Apoie Nosso Site</NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : styles.link)}> <HiInformationCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Quem Somos</NavLink>
        <NavLink to='/suport' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillQuestionCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Suporte</NavLink>
    </nav>
  )
}

export default Navbar