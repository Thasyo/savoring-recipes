import { useParams, useNavigate } from 'react-router-dom';
import { useInsertDocument } from '../../hooks/useInsertDocument';

import styles from '../RecipesByCategory/RecipesByCategory.module.css'

import Search from '../../components/Search/Search'

import { AiFillHeart } from "react-icons/ai";
import { FaInfinity } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { useAuthValue } from '../../context/AuthContext';

const RecipesByCategory = () => {

    let navigate = useNavigate();

    const {categoryName} = useParams();
    const {user} = useAuthValue();
    const { insertDocument } = useInsertDocument('favorites');

    const [item, setItem] = useState();

    const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;

    useEffect(() => {

        fetch(urlCategory).then(res=> res.json()).then(data=>{
            //for e criar uma classe anonima adicionando isFavorite
            let jurema =  data.meals.map(i => {
                return {
                    userId: user.uid,
                    userName: user.displayName,
                    recipeId: i.idMeal,
                    recipeName: i.strMeal,
                    recipeImage: i.strMealThumb,
                    isFavorite: false
                }
                
            });

            console.log("olha eu aqui")
            setItem(jurema);
        })

    }, [urlCategory]);
    

    const handleAddFavorites = (recipeId, recipeName, recipeImage) => {

        if(user){

            const favoritedRecipe = {
                userId: user.uid,
                userName: user.displayName,
                recipeId: recipeId,
                recipeName: recipeName,
                recipeImage: recipeImage,
                isFavorite: true,
            }

            insertDocument({favoritedRecipe})

            //find na lista pelo id e setar o isFavorite para true
            const recipeIds = item.map((i) => i.recipeId);
            
            for (let i = 0; i < recipeIds.length; i++) {

                if(recipeId === recipeIds[i]){
                    item[i].isFavorite = true;
                    console.log(item[i].isFavorite)
                }

            }

            console.log(item)

        }else{
            navigate("/register")
        }

    }

  return (
    <div className={styles.recipesByCategory}>
        <Search/>
        <h1><span className={styles.titleBorderCategory}>t</span> {categoryName}</h1>
        <div className={styles.container}>

            {item ? item.map((item) => (
                <div className={styles.containerRecipes} key={item.recipeId}>
                    <div className={styles.cardRecipes}>
                        <div><img src={item.recipeImage} alt={item.recipeName} /></div>
                        <AiFillHeart 
                            className={!item.isFavorite ? styles.AiFillHeart : styles.AiFillHeartFavorite} //add validacao do isFavorite
                            onClick={() => handleAddFavorites(item.recipeId, item.recipeName, item.recipeImage)}
                        />
                        <h3>{item.recipeName}</h3>
                        <button className={styles.btnRecipes} onClick={() => navigate(`/recipeInfo/${item.recipeId}`)}>See Recipe</button>
                    </div>
                </div>
            )) : <div className='loadingPage'><FaInfinity/></div> }

        </div>
    </div>
  )
}

export default RecipesByCategory