import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
render(){
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Hello world, I am Josh!</h1>
    </div>
  );
}

}

export default Header;
