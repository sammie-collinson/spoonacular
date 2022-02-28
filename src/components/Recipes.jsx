import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {


    return(
        <div className="container">
            {props.recipeDetails.map((recipe, index) => (
                
                <div key={index}  >
                    <Recipe
                        index={index}
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