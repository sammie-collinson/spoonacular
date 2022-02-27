import React from 'react'


const Recipe = (props) => {
    const {image, incrementPage, page, recipeID, title, recipePageID, setRecipePageID } = props
    
   
   const test = () => {
       recipePageID=title
   } 
      
   
    return(
       <div>
        <div onClick={incrementPage} className="recipe-card" key={recipeID}>
            <h3>
                {title}
            </h3>
            <img src={image} alt={title} onClick={test}></img>   
        </div>
       </div>
        
    )
};

export default Recipe;
