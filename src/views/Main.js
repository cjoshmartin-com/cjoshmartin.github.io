import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Grid,Row,Col} from 'react-bootstrap';

class Main extends Component {
  constructor(prop){
      super(prop);
      this.state ={
          name: "",
          description: "",
          resumelink: "",
          resumedate: "",
          email: "",
          job : "",
          interests: []
      }
  }

async  componentDidMount(){
    const rootRef= firebase.database().ref();
      rootRef.on('value',snapshot =>{
      var data =snapshot.child("/").val();
      // console.log(JSON.stringify(data.interests,null,' '));
      this.setState({
        name : data.name,
        description: data.description,
        email: data.email,
        job: data.job,
        interests: data.interests
      })
    });

  }
render(){

  // console.log(this.state.interests);
  var interestsList = this.state.interests.map((list,index)=>{
    return(
    <span key={index} className="interests">
      "{list}"{(index < this.state.interests.length -1) ? <span style={{color:"black"}}>,</span>:""}
    </span>
    );
  });

  return(
    <div className="App-intro indexPage">
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12}>
      <div>
        <span className="varText">var </span> <span className="varName">introduction</span> = [<span className="interests">{this.state.description}</span>]
      </div>
      <div>
        <span className="varText">var </span> <span className="varName">job</span> = [<span className="interests">is_hired:</span>{(this.state.job.is_hired =="False") ? <span className="errorText">False</span>:<span className="varName">True</span>} ,<span className="interests">current_job:</span><span className="varName">"{this.state.job.current_job}"</span>]
      </div>
      <div>
        <span className="varText">var </span> <span className="varName">interest</span> = [{interestsList}]
      </div>
      <div style={{textAlign:"center"}}>
        <br />
        <a href="/about"><span className="varName">Class</span> learnMore(<span className="varName">User newUser</span>)<span style={{color:"black"}}>;</span></a>
      </div>
      </Col>
      </Row>
      </Grid>

    </div>
  );
}
}

// Class LearnMore(User newUser)

export default Main;

// console.error("is_hired is equal to False. Please help fix this error")
