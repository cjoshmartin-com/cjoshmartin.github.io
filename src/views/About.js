import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Grid,Row,Col} from 'react-bootstrap';

class About extends Component{
  constructor(props){
  super(props);
    this.state={
      classList:[],
    }
  }

async componentDidMount(){
    const dbRef= await firebase.database().ref();
    dbRef.on('value',snapshot=>{
   var data = snapshot.child("/classes").val();
    // console.log(JSON.stringify(data[0],null,' '));
    this.setState({classList:data});
    //console.log(JSON.stringify(this.state.obj,null,' '));
  })
  }
  render(){
    const classList = this.state.classList.reverse().map((list, index) => {
      // console.log(list)
     return (
       <p key={index}>{list.name}, {list.semester} ({list.classnumber})</p>
     );
   });
    return(

      <div className="indexPage">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>
        <h1>This is the About page</h1>
        <p><strong>I am Josh Martin, an undergraduate at Indiana University Purdue University Indianapolis, studying Computer Engineering.</strong>
        I love to make things. I spend most of my time teaching myself programing, studying and dancing. I would like to think of myself as very Independent.
         I like to figure out things on my own, and when I am involed in a project I like having a hand in every part of said project.</p>
        <h1>Relevant Coursework</h1>
        {classList}
      </Col>
      </Row>
      </Grid>
      </div>
    );
  }
}
export default About;
