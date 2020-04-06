import React from 'react';
import PropTypes from 'prop-types';

import Quote from './Quote.js'

const QuoteList = props => {
    return (
        <div>
            {
                props.memos.map(memo =>
                    <Quote quote={memo} key={memo.id}/>
                    )
            }
        </div>
    )
};

QuoteList.propTypes = {
    memos: PropTypes.arrayOf(PropTypes.object)
};

export default QuoteList;