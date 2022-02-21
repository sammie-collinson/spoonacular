import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {
    return(
        <div key={props.recipes.id}>
            {props.recipeDetails.map((recipe) => (
                <div>
                    <Recipe
                        title={recipe.title}
                        image={recipe.image} />
                </div>
            )
            )}
        </div>
    )
};

export default Recipes;