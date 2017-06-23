import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from '../views/App';
import Main from '../views/Main';
import About from "../views/About";
import Projects from "../views/Projects";

import Database from '../Database';

export default class AppRouter extends Component {
  constructor(prop){
      super(prop);
      Database.init();
      this.state ={
          name: "",
          description: "",
          resume: ""
      }
  }
    render(){
      return(
        <Router history={browserHistory}>
         <Route exact={true} path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="/about" component={About}/>
         <Route path="/projects" component={Projects} />
       </Route>
        </Router>
    );
  }
}
