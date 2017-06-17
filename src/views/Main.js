import React, { Component } from 'react';
import * as firebase from 'firebase';
import Database from '../Database';

import { Button,ButtonToolbar,OverlayTrigger,Tooltip,Image,Col,Row } from 'react-bootstrap';

import {Link} from "react-router";

class Main extends Component {
  constructor(prop){
      super(prop);
      this.state ={
          name: "",
          description: "",
          resume: ""
      }
  }

  componentDidMount(){
    const rootRef= firebase.database().ref();
    rootRef.on('value',snapshot =>{
      var data =snapshot.child("/").val();
      console.log(JSON.stringify(data,null,' '));
      this.setState({
        name : data.name,
        description: data.description,
        resumelink: data.resume.link,
        resumedate: data.resume.date,
        email: data.email
      })
    });

  }
render(){

  const tooltip = (
  <Tooltip id="tooltip">Last Updated: {this.state.resumedate}</Tooltip>
);
var tomail =function (email) {
  return "mailto:"+email;
}

  return(
    <p className="App-intro">
        <Image src="https://avatars1.githubusercontent.com/u/8135112?v=3&s=460" thumbnail width="200" height="200"/>
        <p>{this.state.description}</p>
      <p>Contact me <span style={{fontSize: 20, fontWeight: 400}}>@</span> <a href={tomail(this.state.email)}>contact@cjoshmartin.com</a></p>
      <h3>Interests</h3>
      <p>Blockchain</p><p>Cryptography</p><p>Internet Security</p><p>Moblie development</p>
        <Row>
        <Col md={5} />
        <Col md={4}>
         <ButtonToolbar>

         <Button><Link to="about">About</Link></Button>

         <OverlayTrigger placement="right" overlay={tooltip}>

          <Button bsStyle="info" href={this.state.resumelink} target="_blank">Resume</Button>

            </OverlayTrigger>
        </ButtonToolbar>
      </Col>
      <Col md={3}/>
    </Row>
    </p>
  );
}
}

export default Main;

/*

      <Button bsStyle="default">Holy guacamole!</Button>

    */
