import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


import QuoteList from './components/QuoteList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memoData: [
        {
        id:1,
        title: "Hawaiian Shirt Friday",
        memo: 
        "Oh, and remember: Next Friday...is Hawaiian shirt day. So, you know, if you want to, go ahead and wear a Hawaiian shirt and jeans."
        },
        {
          id:2, 
          title: "Sunday Weekend Catch-up",
          memo: "Ahhh, I'm also going to need you to go ahead and come in on Sunday, too. We've got some new people coming in and we... need to play catch-up. Thanks!"

        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Mr. Lumbergh's Memos</h1>
        <QuoteList memos={this.state.memoData} />
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
