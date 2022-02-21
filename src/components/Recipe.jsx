import React from 'react'

const Recipe = (props) => {
    return(
        <div>
            <h3>
                {props.title}
            </h3>
            <img src={props.image} alt={props.title}></img>   
        </div>
    )
};

export default Recipe;
