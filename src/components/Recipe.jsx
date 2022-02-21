import React from 'react'

const Recipe = (props) => {
    return(
        <div className="recipe-card" key={props.id}>
            <h3>
                {props.title}
            </h3>
            <img src={props.image} alt={props.title}></img>   
        </div>
    )
};

export default Recipe;
