import React, { useState } from 'react'
import Search from '../../components/Search/Search'
import styles from '../CustomRecipes/CustomRecipes.module.css'
import { configOpenai } from '../../openai/config'

const CustomRecipes = () => {

  const [ingredients, setIngredients] = useState('')
  const [generatedRecipe, setGeneratedRecipe] = useState('')

  const {api_key, url} = configOpenai;

  const generateRecipe = async (api_key, url, prompt) => {
    
    const requestOptions =  {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${api_key}` 
      },
      body: JSON.stringify({
        prompt: `Crie uma receita com os seguintes ingredientes: ${prompt}.`,
        max_tokens: 200,
        temperature: 0.7
      })
    }

    try {

      const response = await fetch(url, requestOptions)

      if(!response.ok){
        throw new Error(`Erro na solicitação: ${response.status}`)
      }

      const data = await response.json()
      const generatedRecipe = data.choices[0].text

      setGeneratedRecipe(generatedRecipe)

    } catch (error) {
      console.error('Erro:', error);
    }

  }
  
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
              <textarea cols="5" rows="5" placeholder='Enter the ingredients you have available, for example: rice, chicken, salt, parsley. . .' value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
            </label>
          </form>
          <button onClick={() => generateRecipe(api_key, url, ingredients)}>Generate</button>
        </div>

        <div className={styles.responseGenerated}>
          {generatedRecipe && (
            <div>
              <p>{generatedRecipe}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default CustomRecipes