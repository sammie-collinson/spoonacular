import React from 'react'


const Recipe = (props) => {
    const {image, incrementPage, page, recipeID, title, recipePageID, setRecipePageID, index } = props
    
   
    return(
       <div>
        <div onClick={incrementPage} className="recipe-card" key={recipeID}>
            <h3>
                {title}
            </h3>
            <img src={image} alt={title} onClick={setRecipePageID} index={index}></img>   
        </div>
       </div>
        
    )
};

export default Recipe;
