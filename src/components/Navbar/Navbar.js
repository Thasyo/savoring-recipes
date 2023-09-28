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
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillHome className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/> Home Page</NavLink>
        <NavLink className={styles.link} onClick={() => toogleCategories()}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Recipes <BiSolidRightArrow className={(isVisible ? styles.animationArrow : styles.iconNavBarArrow)}/></NavLink>
        <div className={isVisible ? styles.categories : styles.none}>
          <div>
            <h2> <span className='title-border'></span>Meal Types</h2>
            <ul>
              <NavLink>Breakfast</NavLink>
              <NavLink>Appetizer</NavLink>
              <NavLink>Side</NavLink>
              <NavLink>Miscellaneous</NavLink>
              <NavLink>Dessert</NavLink>
              <NavLink>Pasta</NavLink>
              <NavLink>Seafood</NavLink>
              <NavLink>Vegan</NavLink>
              <NavLink>Vegetarian</NavLink>
            </ul>
          </div>

          <div>
            <h2> <span className='title-border'></span>Types of Meat</h2>
            <ul>
              <NavLink> <span className={styles.borderCategories}></span> Beef</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Chicken</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Goat</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Lamb</NavLink>
              <NavLink> <span className={styles.borderCategories}></span> Pork</NavLink>
            </ul>
          </div>
        </div>
        <NavLink to='/customRecipes' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Custom Recipes</NavLink>
        <NavLink to='/comunity' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCook className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Comunity</NavLink>
        <NavLink to='/courses' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiDiploma className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Courses</NavLink>
        <NavLink to='/donate' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiHeartBeats className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Support Our Site</NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : styles.link)}> <HiInformationCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  About</NavLink>
        <NavLink to='/suport' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillQuestionCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  Support</NavLink>
    </nav>
  )
}

export default Navbar