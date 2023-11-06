import React from 'react'
import styles from '../SearchFood/SearchFood.module.css'
import Search from '../../components/Search/Search'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const SearchFood = () => {

    const {search} = useParams()
    const navigate = useNavigate()

    const urlSearchFood = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const [item, setItem] = useState('');

    useEffect(() => {

        fetch(urlSearchFood).then(res => res.json()).then(data => {
            console.log(data.meals);
            setItem(data.meals);
        })

    }, [urlSearchFood]);

    const { insertDocument } = useInsertDocument('favorites');
    const {user} = useAuthValue();

    const handleAddFavorites = (recipeId, recipeName, recipeImage) => {

        if(user){

            insertDocument({
                userId: user.uid,
                userName: user.displayName,
                recipeId: recipeId,
                recipeName: recipeName,
                recipeImage: recipeImage 
            })

        }else{
            navigate("/register")
        }

    }

  return (
    <div className={styles.searchFood}>
        <Search/>
        <h1><span className={styles.titleBorderCategory}>t</span> {search}</h1>
        <div className={styles.container}>

            {item ? item.map((item) => (
                <div className={styles.containerRecipes} key={item.idMeal}>
                    <div className={styles.cardRecipes}>
                        <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                        <AiFillHeart className={styles.AiFillHeart} onClick={() => handleAddFavorites(item.idMeal, item.strMeal, item.strMealThumb)}/>
                        <h3>{item.strMeal}</h3>
                        <button className={styles.btnRecipes} onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                    </div>
                </div>
            )) : <div className={styles.notFound}>Not Found. . .</div> }

        </div>
    </div>
  )
}

export default SearchFood