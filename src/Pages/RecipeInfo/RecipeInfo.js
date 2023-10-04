import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import styles from '../RecipeInfo/RecipeInfo.module.css'

import Search from '../../components/Search/Search'

import { AiFillHeart } from "react-icons/ai";
import { FaInfinity } from "react-icons/fa6";


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
                    <div>
                        <p>detalhes dos ingredientes</p>
                    </div>

                    <h1><span className={styles.titleBorderCategory}>t</span> Method of preparation</h1>
                    <div>
                        <p>detalhes do modo de preparo</p>
                    </div>

                    <h1><span className={styles.titleBorderCategory}>t</span> Comments and Ratings</h1>
                    <div>
                        <p>Leave a comment on the recipe and help us improve your experience with our recipes every day! The team at Saboreando Recipes thanks you!</p>
                    </div>
                    <div>
                        <form>
                            <label>
                                <textarea cols="30" rows="10"></textarea>
                            </label>

                            <label>
                                <span>Name</span>
                                <input type="text" />
                            </label>

                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>

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