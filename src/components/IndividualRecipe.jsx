import React from 'react'

const IndividualRecipePage = (props) => {

    const {recipeDetails, recipePageID} = props

    const specificRecipe = recipeDetails.filter(recipe =>
        recipe.title===recipePageID);

    let instructions;
    const nullFixer = () => {
        if(specificRecipe[0].instructions===null){
            instructions="no instructions sorry good luck lmaoooo"
        } else{
            instructions=specificRecipe[0].instructions.replace(/<[^>]+>/g, '')
        }
    }
    nullFixer();
    
    return(
        <div>
            <div className="single-recipe">
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
                <p>{instructions}</p>
            </div>
        </div>
    )
};

export default IndividualRecipePage;