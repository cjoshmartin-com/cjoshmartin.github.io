import React, { Component } from 'react';
import logo from '../logo.png';
import { Nav, NavItem } from 'react-bootstrap';
import { Grid} from 'semantic-ui-react'

import PropTypes from 'prop-types';

class Header extends Component {
render(){
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1> Hello world, I am {this.props.name}!</h1>
        <Grid centered columns={2}>
      <Nav bsStyle="pills" >
        <NavItem href="/">Home</NavItem>
        <NavItem href="#/about">About</NavItem>
        <NavItem href="#/projects"> Projects</NavItem>
      </Nav>
    </Grid>
    </div>
    </div>
  );
}

}

Header.propTypes ={
    name: PropTypes.string.isRequired,
}

export default Header;
