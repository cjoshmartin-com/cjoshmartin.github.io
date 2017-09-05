import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { HashRouter as Router, Route } from 'react-router-dom'
import App from './views/App.js'


ReactDOM.render(
    <Router>
        <Route component={App} />
    </Router> ,document.getElementById('root')
);
registerServiceWorker();
