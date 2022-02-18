import React, {useEffect} from 'react'
import './App.css';
import axios from 'axios';

const App = () => {

  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY
  const API = `https://api.spoonacular.com/recipes/716429/information?apiKey=${APIKey}&includeNutrition=false`
  const complexSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`

  useEffect(() => {
    async function getRecipes() {
      const res = await axios.get(`${complexSearch}`)
      console.log(res.data.results)
    }
    getRecipes();
  })

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
