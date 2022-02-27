import React from 'react'

const IndividualRecipePage = (props) => {

    const {recipeDetails, recipePageID} = props

    const specificRecipe = recipeDetails.filter(recipe =>
        recipe.title===recipePageID);

    console.log(specificRecipe)
    
    return(
        <div>
            <h1>
                {specificRecipe[0].title}
            </h1>
        </div>
    )
};

export default IndividualRecipePage;