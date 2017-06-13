import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import icon from "../component/icon"

import * as firebase from 'firebase';
import Database from '../Database';

class App extends Component {
  constructor(prop){
      super(prop);
      Database.init();
      this.state ={
          name: "",
          description: "",
          resume: ""
      }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}

      </div>

    );
  }
}

export default App;
