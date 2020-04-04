import React from 'react';


const Quote = props => {
    return (
        <div>
            <h2>{props.quote.title}</h2>
            <h3>{props.quote.memo}</h3>
        </div>
    );
};

export default Quote;