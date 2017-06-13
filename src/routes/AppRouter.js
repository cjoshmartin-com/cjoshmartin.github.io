import React, { Component } from 'react';
import {Route, IndexRoute} from "react-router";

import App from '../views/App';
import Main from '../views/Main';
import About from "../views/About";
import Projects from "../views/Projects";

export default (
      <Route exact={true} path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="about" component={About}/>
      <Route path="projects" component={Projects} />
      </Route>
    );
