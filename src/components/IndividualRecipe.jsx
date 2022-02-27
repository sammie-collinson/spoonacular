import React from 'react'

const IndividualRecipePage = (props) => {

    const {recipeDetails, recipePageID} = props

    const specificRecipe = recipeDetails.filter(recipe =>
        recipe.title===recipePageID);

    console.log(specificRecipe)
    
    return(
        <div>
            <div>
                <h2>
                 {specificRecipe[0].title}
                </h2>
                <img src={specificRecipe[0].image} alt={specificRecipe[0].title}></img>
                <p>Ready In: {specificRecipe[0].readyInMinutes} minutes</p>
            </div>
            <div  className="ingredients">
                <h3>Ingredients</h3>
                <ul >
                    {
                        specificRecipe[0].extendedIngredients.map((ingredient) => (
                            <li key={ingredient.original}>
                                {ingredient.original}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                <p>{specificRecipe[0].instructions.replace(/<[^>]+>/g, '')}</p>
            </div>
        </div>
    )
};

export default IndividualRecipePage;