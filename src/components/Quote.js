import React from 'react';
import PropTypes from 'prop-types';

const Quote = props => {
    return (
        <div>
            <h2>{props.quote.title}</h2>
            <h3>{props.quote.memo}</h3>
            <h3>memo ID is: {props.quote.id}</h3>
        </div>
    );
};


Quote.propTypes = {
    quote: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        memo: PropTypes.string.isRequired
    })
};

export default Quote;