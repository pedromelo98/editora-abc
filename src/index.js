import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './application/routes/Routes.js';
import * as serviceWorker from './serviceWorker';

import './application/assets/fonts/FredokaOne-Regular.ttf'
import './application/assets/fonts/Shrikhand-Regular.ttf'

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
