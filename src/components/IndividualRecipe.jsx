import React from 'react'

const IndividualRecipePage = (props) => {

    const {recipeDetails, recipePageID} = props

    const specificRecipe = recipeDetails.filter(recipe =>
        recipe.title===recipePageID);

    console.log(specificRecipe)
    
    return(
        <div>
            <h2>
                {specificRecipe[0].title}
            </h2>
            <img src={specificRecipe[0].image} alt={specificRecipe[0].title}></img>
        </div>
    )
};

export default IndividualRecipePage;