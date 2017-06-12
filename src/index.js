import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,IndexRoute, hashHistory } from "react-router";
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={App}>
</Router> , document.getElementById('root'));
registerServiceWorker();
