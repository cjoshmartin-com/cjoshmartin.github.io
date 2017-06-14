import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import icon from "../component/icon"
import Main from "./Main"
class App extends Component {
  constructor(prop){
      super(prop);
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children || <Main />}

      </div>

    );
  }
}

export default App;
