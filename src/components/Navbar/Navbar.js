//styles 
import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { GiCookingPot, GiCook} from "react-icons/gi";
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
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillHome className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/> <span className={styles.shortcutsName}>Home Page</span></NavLink>
        <NavLink className={styles.link} onClick={() => toogleCategories()}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  <span className={styles.shortcutsName}>Recipes</span> <BiSolidRightArrow className={(isVisible ? styles.animationArrow : styles.iconNavBarArrow)}/></NavLink>
        <div className={isVisible ? styles.categories : styles.none}>
          <div>
            <h2> <span className='title-border'></span>Meal Types</h2>
            <ul>
              <NavLink to="/recipesByCategory/Breakfast" >Breakfast</NavLink>
              <NavLink to="/recipesByCategory/Starter" >Starter</NavLink>
              <NavLink to="/recipesByCategory/Side" >Side</NavLink>
              <NavLink to="/recipesByCategory/Miscellaneous" >Miscellaneous</NavLink>
              <NavLink to="/recipesByCategory/Dessert" >Dessert</NavLink>
              <NavLink to="/recipesByCategory/Pasta" >Pasta</NavLink>
              <NavLink to="/recipesByCategory/Seafood" >Seafood</NavLink>
              <NavLink to="/recipesByCategory/Vegan" >Vegan</NavLink>
              <NavLink to="/recipesByCategory/Vegetarian" >Vegetarian</NavLink>
            </ul>
          </div>

          <div>
            <h2> <span className='title-border'></span>Types of Meat</h2>
            <ul>
              <NavLink to="/recipesByCategory/Beef" >Beef</NavLink>
              <NavLink to="/recipesByCategory/Chicken" >Chicken</NavLink>
              <NavLink to="/recipesByCategory/Goat" >Goat</NavLink>
              <NavLink to="/recipesByCategory/Lamb" >Lamb</NavLink>
              <NavLink to="/recipesByCategory/Pork" >Pork</NavLink>
            </ul>
          </div>
        </div>
        {/* <NavLink to='/customRecipes' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCookingPot className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  <span className={styles.shortcutsName}>Custom Recipes</span></NavLink> */}
        <NavLink to='/comunity' className={({isActive}) => (isActive ? styles.active : styles.link)}> <GiCook className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  <span className={styles.shortcutsName}>Community</span></NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : styles.link)}> <HiInformationCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  <span className={styles.shortcutsName}>About</span></NavLink>
        <NavLink to='/support' className={({isActive}) => (isActive ? styles.active : styles.link)}> <AiFillQuestionCircle className={({isActive}) => (isActive ? styles.iconNavBarActive : styles.iconNavBar)}/>  <span className={styles.shortcutsName}>Support</span></NavLink>
    </nav>
  )
}

export default Navbar