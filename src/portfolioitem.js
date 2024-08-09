import React from 'react';

function Portfolioitem({title, description}){
    return(
        <div className='portfolioitem'>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
    );
}

export default Portfolioitem;
