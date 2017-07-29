import React, { Component } from 'react';
import logo from '../logo.png';
import { Nav, NavItem } from 'react-bootstrap';
import { Grid} from 'semantic-ui-react'
import * as firebase from 'firebase';

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
      //console.log(JSON.stringify(data,null,' '));
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
        <Grid centered columns={2}>
      <Nav bsStyle="pills" >
        <NavItem href="/">Home</NavItem>
        <NavItem href="#/about">About</NavItem>
        <NavItem href="#/projects">Projects</NavItem>
      </Nav>
    </Grid>
    </div>
    </div>
  );
}

}

export default Header;
