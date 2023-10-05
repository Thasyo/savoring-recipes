import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import styles from '../RecipeInfo/RecipeInfo.module.css'

import Search from '../../components/Search/Search'

import { AiFillHeart } from "react-icons/ai";
import { FaInfinity } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";


const RecipeInfo = () => {

    const { idMeal } = useParams();

    const urlRecipeInfo = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const [item, setItem] = useState();

    useEffect(() => {

        fetch(urlRecipeInfo).then(res => res.json()).then(data => {
            console.log(data.meals[0]);
            setItem(data.meals[0]);
        })

    }, [urlRecipeInfo]);

    return (
        <div className={styles.recipeInfo}>
            <Search />
            {item ? (
                <>

                    <h1><span className={styles.titleBorderCategory}>t</span> {item.strMeal}</h1>
                    <div className={styles.containerImgVideo}>
                        <div className={styles.containerImg}>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                        </div>
                        { item.strYoutube ? (
                            <div className={styles.containerVideo}>
                                <h2>Want to have a better experience?</h2>
                                <p>Watch the recipe video </p>
                                <a href={item.strYoutube} target='_blank' rel="noreferrer">Watch video</a>
                            </div>
                        ) : '' }
                    </div>

                    <div>
                        <button className={styles.btnFavorite}> <AiFillHeart className={styles.AiFillHeart} /> <span>Favorite</span></button>
                    </div>

                    <h1><span className={styles.titleBorderCategory}>t</span> Ingredients</h1>
                    <ul className={styles.containerIngredients}>
                        <div>
                            {item.strIngredient1 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient1} - {item.strMeasure1}</span></li>) : ''}
                            {item.strIngredient2 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient2} - {item.strMeasure2}</span></li>) : ''}
                            {item.strIngredient3 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient3} - {item.strMeasure3}</span></li>) : ''}
                            {item.strIngredient4 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient4} - {item.strMeasure4}</span></li>) : ''}
                            {item.strIngredient5 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient5} - {item.strMeasure5}</span></li>) : ''}
                            {item.strIngredient6 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient6} - {item.strMeasure6}</span></li>) : ''}
                            {item.strIngredient7 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient7} - {item.strMeasure7}</span></li>) : ''}
                            {item.strIngredient8 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient8} - {item.strMeasure8}</span></li>) : ''}
                            {item.strIngredient9 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient9} - {item.strMeasure9}</span></li>) : ''}
                            {item.strIngredient10 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient10} - {item.strMeasure10}</span></li>) : ''}
                        </div>
                        <div>
                            {item.strIngredient11 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient11} - {item.strMeasure11}</span></li>) : ''}
                            {item.strIngredient12 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient12} - {item.strMeasure12}</span></li>) : ''}
                            {item.strIngredient13 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient13} - {item.strMeasure13}</span></li>) : ''}
                            {item.strIngredient14 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient14} - {item.strMeasure14}</span></li>) : ''}
                            {item.strIngredient15 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient15} - {item.strMeasure15}</span></li>) : ''}
                            {item.strIngredient16 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient16} - {item.strMeasure16}</span></li>) : ''}
                            {item.strIngredient17 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient17} - {item.strMeasure17}</span></li>) : ''}
                            {item.strIngredient18 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient18} - {item.strMeasure18}</span></li>) : ''}
                            {item.strIngredient19 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient19} - {item.strMeasure19}</span></li>) : ''}
                            {item.strIngredient20 ? (<li> <MdRestaurantMenu className={styles.MdRestaurantMenu}/> <span>{item.strIngredient20} - {item.strMeasure20}</span></li>) : ''}
                        </div>
                    </ul>

                    <h1><span className={styles.titleBorderCategory}>t</span> Method of preparation</h1>
                    <div className={styles.containerInstructions}>
                        <p>{item.strInstructions}</p>
                    </div>

                    <h1><span className={styles.titleBorderCategory}>t</span> Comments and Ratings</h1>
                    <div className={styles.containerComments}>
                        <div>
                            <p>Leave a comment on the recipe and help us improve your experience with our recipes every day! The team at Saboreando Receitas thanks you!</p>
                        </div>
                        <form className={styles.containerForm}>
                            <label>
                                <textarea cols="30" rows="6" placeholder='Leave your comment here. . .'></textarea>
                            </label>
                            <div>
                                <label>
                                    <span>Name</span>
                                    <input type="text" placeholder='Enter your name here. . .'/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" placeholder='Enter your email here. . .'/>
                                </label>
                            </div>
                            <button className={styles.btnComments}>Enviar</button>
                        </form>    
                    </div>

                    <div>
                        <div>
                            <img src="#" alt="#" />
                            <div>
                                <p>like</p>
                                <p>deslike</p>
                            </div>
                            <div>
                                <p>comentario fictício</p>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <div className='loadingPage'><FaInfinity /></div>
            )}

        </div>
    )
}

export default RecipeInfo