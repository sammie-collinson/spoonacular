import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {
    return(
        <div className="container">
            {props.recipeDetails.map((recipe) => (
                <div  >
                    <Recipe
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        page={props.page}
                        incrementPage={props.incrementPage} />
                </div>
            )
            )}
        </div>
    )
};

export default Recipes;