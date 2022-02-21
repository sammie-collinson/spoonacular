import React from 'react'
import Recipes from './Recipes';

const LandingPage = (props) => {
    return(
        <div>
            <Recipes
                 recipeDetails={props.recipeDetails}
                 recipes={props.recipes}
                 page={props.page}
                 incrementPage={props.incrementPage}/>
        </div>
    )
};

export default LandingPage;