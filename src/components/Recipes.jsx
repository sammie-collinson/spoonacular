import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {
    return(
        <div className="container" key={props.recipes.id}>
            {props.recipeDetails.map((recipe) => (
                <div >
                    <Recipe
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image} />
                </div>
            )
            )}
        </div>
    )
};

export default Recipes;