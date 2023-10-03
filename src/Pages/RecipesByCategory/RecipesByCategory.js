import { useParams } from 'react-router-dom';

import styles from '../RecipesByCategory/RecipesByCategory.module.css'

import Search from '../../components/Search/Search'

import { AiFillHeart } from "react-icons/ai";
import { FaInfinity } from "react-icons/fa6";

import { useEffect, useState } from 'react';

const RecipesByCategory = () => {

    const {categoryName} = useParams();

    const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
    const [item, setItem] = useState();

    useEffect(() => {

        fetch(urlCategory).then(res=> res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
        })

    }, [urlCategory]);

  return (
    <div className={styles.recipesByCategory}>
        <Search/>
        <h1><span className={styles.titleBorderCategory}>t</span> {categoryName}</h1>
        <div className={styles.container}>

            {item ? item.map((item) => (
                <div className={styles.containerRecipes} key={item.idMeal}>
                    <div className={styles.cardRecipes}>
                        <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                        <AiFillHeart className={styles.AiFillHeart}/>
                        <h3>{item.strMeal}</h3>
                        <button className={styles.btnRecipes}>See Recipe</button>
                    </div>
                </div>
            )) : <div className='loadingPage'><FaInfinity/></div> }

        </div>
    </div>
  )
}

export default RecipesByCategory