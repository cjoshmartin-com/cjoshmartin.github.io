import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import Footer from "../component/Footer"

import Main from './Main';
import About from "./About";
import Projects from "./Projects";
import Blog from './Blog';

import { db } from '../firebase'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*this.props.children || <Main />*/}

        <Switch>
         <Route exact={true} path="/" component={Main}/>
         <Route path="/about" component={About}/>
         <Route path="/projects" component={Projects} />
         <Route path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
