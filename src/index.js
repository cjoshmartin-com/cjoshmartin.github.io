import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Router, browserHistory } from 'react-router';
import AppRouter from "./routes/AppRouter"


ReactDOM.render(  <Router routes={AppRouter} history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
