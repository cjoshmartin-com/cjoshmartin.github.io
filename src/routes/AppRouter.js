import React, { Component } from 'react';
import {Router,Route,IndexRoute } from "react-router";
import createHistory from 'history/createBrowserHistory';
import App from '../views/App';
class AppRouter extends Component {
history = createHistory(this.props)
  render(){
    return(

      <Router history={this.history}>
      <Route exact={true} path="/" component={App}></Route>
    </Router>
    );
  }
}


export default AppRouter;
