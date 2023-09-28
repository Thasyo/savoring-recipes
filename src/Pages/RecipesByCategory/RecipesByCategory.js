import React from 'react'

import styles from '../RecipesByCategory/RecipesByCategory.module.css'

import Search from '../../components/Search/Search'

import { AiFillHeart } from "react-icons/ai";


import bgRegister from '../../assets/bg-register-and-login.jpg'

const RecipesByCategory = () => {
  return (
    <div className={styles.recipesByCategory}>
        <Search/>
        <h1><span className={styles.titleBorderCategory}>t</span> Category name</h1>
        <div className={styles.container}>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

            <div className={styles.containerRecipes}>
                <div className={styles.cardRecipes}>
                    <div><img src={bgRegister} alt="recipe picture" /></div>
                    <AiFillHeart className={styles.AiFillHeart}/>
                    <h3>Recipe Title</h3>
                    <input value="See Recipe" className={styles.btnRecipes}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecipesByCategory