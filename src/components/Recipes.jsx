import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {


    return(
        <div  key={'key'} className="container">
            {props.recipeDetails.map((recipe) => (
                
                <div  >
                    <Recipe
                        key={recipe.id}
                        recipeID={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        page={props.page}
                        incrementPage={props.incrementPage}
                        recipePageID={props.recipePageID}
                        setRecipePageID={props.setRecipePageID}
                         />
                </div>
            )
            )}
        </div>
    )
};

export default Recipes;