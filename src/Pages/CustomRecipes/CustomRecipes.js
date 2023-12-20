import React from 'react'
import Search from '../../components/Search/Search'
import styles from '../CustomRecipes/CustomRecipes.module.css'
import { configOpenai } from '../../openai/config'

const CustomRecipes = () => {

  const {api_key, url} = configOpenai;
  
  return (
    <div className={styles.customRecipes}>
      <Search/>
      <h1>Custom Recipes</h1>
      <div>

        <div className={styles.containerInitial}>
          <p>Are you tired of searching for recipes and not finding anything that is available and affordable for you at that moment?</p>
          <p>Discover our “Customized Recipes” environment!</p>
          <p>Here you can generate income according to what you have available in your home!</p>
          <p>Check it out now and try it!</p> 
        </div>

        <div>
          <h2>What ingredients do you have available?</h2>
          <form>
            <label>
              <textarea cols="5" rows="5" placeholder='Enter the ingredients you have available, for example: rice, chicken, salt, parsley. . .'></textarea>
            </label>
          </form>
          <button>Generate</button>
        </div>

        <div className={styles.responseGenerated}></div>

      </div>
    </div>
  )
}

export default CustomRecipes