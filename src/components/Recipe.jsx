import React from 'react'

const Recipe = (props) => {
    return(
        <div className="recipe-card" key={props.id}>
            <h3>
                {props.title}
            </h3>
            <img src={props.image} alt={props.title} onClick={props.incrementPage}></img>   
        </div>
    )
};

export default Recipe;
