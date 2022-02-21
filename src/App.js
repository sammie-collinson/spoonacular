import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Recipes from './components/Recipes';

const App = () => {
  
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY
  const[recipes, setRecipes] = useState([])
  const [recipeDetails, setRecipeDetails] = useState([])

  const complexSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`

  useEffect(() => {
    async function getRecipes() {
      const res = await axios.get(`${complexSearch}`)
      setRecipes(res.data.results)
      
      let recipeDetails=[]
        for(let i=0; i<res.data.results.length; i++) {
        async function getRecipeDetails() {
          const response = await axios.get(`https://api.spoonacular.com/recipes/${res.data.results[i].id}/information?apiKey=${APIKey}&includeNutrition=false`)
          recipeDetails.push(response.data)
          setRecipeDetails(recipeDetails)
        }
        getRecipeDetails()
      }
              
    }
    getRecipes();

  },[complexSearch])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Recipes 
        recipes={recipes}
        recipeDetails={recipeDetails} />
    </div>
  );
}

export default App;
