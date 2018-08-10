import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { HashRouter as Router, Route } from 'react-router-dom'
import MainAppContainer from './views/mainAppContainer/MainAppContainer.js'


ReactDOM.render(
    <Router>
        <Route component={MainAppContainer} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
