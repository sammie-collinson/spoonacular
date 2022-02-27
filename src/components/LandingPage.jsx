import React from 'react'
import Recipes from './Recipes';
import IndividualRecipePage from './IndividualRecipe';

const LandingPage = (props) => {


    
    return(
        <div>
            <div key={'key'}>
            <Recipes
                 recipeDetails={props.recipeDetails}
                 page={props.page}
                 key={'key'}
                 incrementPage={props.incrementPage}
                 recipePageID={props.recipePageID}
                 setRecipePageID={props.setRecipePageID}
                 />
            </div>
            <IndividualRecipePage
                recipePageID={props.recipePageID} />

        </div>
    )
};

export default LandingPage;