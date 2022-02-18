import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

const App = () => {

  const[recipes, setRecipes] = useState([])
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY
  const API = `https://api.spoonacular.com/recipes/716429/information?apiKey=${APIKey}&includeNutrition=false`
  const complexSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`

  useEffect(() => {
    async function getRecipes() {
      const res = await axios.get(`${complexSearch}`)
      setRecipes(res.data.results)
    }
    getRecipes();
  },[recipes])

  return (
    <div className="App">
      <h1>Hello</h1>
      {console.log(recipes)}
    </div>
  );
}

export default App;
