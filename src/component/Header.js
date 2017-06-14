import React, { Component } from 'react';
import logo from '../logo.png';
import { Nav, NavItem } from 'react-bootstrap';
import {Link, IndexLink} from "react-router";
import * as firebase from 'firebase';
import Database from '../Database';

class Header extends Component {
  constructor(prop){
      super(prop);
      this.state ={
          name: ""
        }
      }

  componentDidMount(){
    const rootRef= firebase.database().ref();
    rootRef.on('value',snapshot =>{
      var data =snapshot.child("/").val();
      console.log(JSON.stringify(data,null,' '));
      this.setState({
        name : data.name,
      })
    });
  }
render(){
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1> Hello world, I am {this.state.name}!</h1>
      <Nav bsStyle="pills" >
        <NavItem href="/"><IndexLink  to="/">Home</IndexLink></NavItem>
        <NavItem href="about"><Link  to="about">About</Link></NavItem>
        <NavItem href="projects"><Link  to="projects">Projects</Link></NavItem>
      </Nav>

    </div>
    </div>
  );
}

}

export default Header;
