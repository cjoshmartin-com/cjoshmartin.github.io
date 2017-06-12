import React, { Component } from 'react';
import logo from '../logo.png';
import { Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
render(){
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Hello world, I am Josh!</h1>
      <div>
      <Nav bsStyle="pills" >
        <NavItem  href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </Nav>
    </div>
    </div>
  );
}

}

export default Header;
