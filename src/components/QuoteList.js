import React from 'react';

import Quote from './Quote.js'

const QuoteList = props => {
    return (
        <div>
            {
                props.memos.map(memo =>
                    <Quote quote={memo} />
                    )
            }
        </div>
    )
};

export default QuoteList;