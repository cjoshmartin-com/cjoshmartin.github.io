import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from '../views/App';
import Main from '../views/Main';
import About from "../views/About";
import Projects from "../views/Projects";

class AppRouter extends Component {

  render(){
    return(

      <Router history={hashHistory}>
      <Route exact={true} path="/" component={App}>
        <IndexRoute component={Main}></IndexRoute>
      </Route>
      <Route path="/about" component={About}></Route>
      <Route path="/projects" component={Projects} ></Route>
    </Router>
    );
  }
}


export default AppRouter;
