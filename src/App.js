import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import staticRecipeDetails from './complexSearch';

const App = () => {
  
  /*--API Globals--*/
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY
  const complexSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`
  
  /*--API States to pass as props to render API data--*/
  const[recipes, setRecipes] = useState([])
  const [recipeDetails, setRecipeDetails] = useState([])
  const [recipePageID, setRecipePageID] = useState('')

  /*--Page # State to help with conditional rendering--*/
  const [page, setPage] = useState(0)
  

  
  
  
  /*--API endpoint access--*/
  useEffect(() => {
    async function getRecipes() {
      setRecipeDetails(staticRecipeDetails);

      // const res = await axios.get(`${complexSearch}`)
      // setRecipes(res.data.results)
      
    
      // let recipeDetails=[]
      // for(let i=0; i<res.data.results.length; i++) {
      //   async function getRecipeDetails() {
      //     const response = await axios.get(`https://api.spoonacular.com/recipes/${res.data.results[i].id}/information?apiKey=${APIKey}&includeNutrition=false`)
      //     recipeDetails.push(response.data)
      //     setRecipeDetails(recipeDetails)
      //   }
      //   getRecipeDetails()
      // }     
    }
    getRecipes();
  },[complexSearch])

  console.log(recipeDetails)
  
  /*--Page # helper functions--*/
  const pageIncrementor = () => {
    setPage((prevState) => prevState+1)
    }

   const recipePageIDHelper = (indexNumberOnClick) => {
    setRecipePageID(recipeDetails[indexNumberOnClick.target.getAttribute('index')].title)
    }
  
  const returnHome = () => {
    setPage(0)
  }

  return (
    <div className="App">
      <h1 className="masthead" onClick={(returnHome)}>Sammie's Spoonacular Project!</h1>
      <LandingPage 
        recipeDetails={recipeDetails}
        page={page}
        incrementPage={pageIncrementor}
        recipePageID={recipePageID}
        setRecipePageID={recipePageIDHelper}
        />
    </div>
  );
}

export default App;
