import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import icon from "../component/icon"

class App extends Component {
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
