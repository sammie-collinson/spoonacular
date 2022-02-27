import React from 'react'
import Recipes from './Recipes';
import IndividualRecipePage from './IndividualRecipe';

const LandingPage = (props) => {

    let pageSetter;
    if(props.page===0){
        pageSetter = <Recipes
        recipeDetails={props.recipeDetails}
        page={props.page}
        key={'key'}
        incrementPage={props.incrementPage}
        recipePageID={props.recipePageID}
        setRecipePageID={props.setRecipePageID}
        />
    }    if(props.page>0){
        pageSetter = <IndividualRecipePage
        recipePageID={props.recipePageID}
        recipeDetails={props.recipeDetails} />
    }
    
    return(
        <div>
            {pageSetter}

        </div>
    )
};

export default LandingPage;