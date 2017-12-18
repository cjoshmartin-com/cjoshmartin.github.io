import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

import Media from "react-media"

class About extends Component{

  render(){
    let classList;
    let certificationList;
    if(this.props.classes){
  
      classList = this.props.classes.map((list, index) => {
     return (
       <li key={index}>{list.name}, {list.semester} ({list.classnumber})</li>
     );
   });
  
   certificationList = this.props.certifications.map((list,i)=>{
     return (
       <li key={i}>
         <h3 style={{marginBottom:"0"}}>{list.type} Certification</h3>
         <strong>{list.from}</strong><br />
         <small>{list.date}</small>
         <p>{list.description}</p>
         <br />
       </li>
     )
   })
  }
    return(

      <div className="indexPage">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>
        <Grid>
          <Row>
            <Col xs={8} sm={8} md={7}>
              <h1>This is the About page</h1>
              <p><strong>I am Josh Martin, an undergraduate at Indiana University Purdue University Indianapolis, studying Computer Engineering. </strong>
               I love to make things. I spend most of my time teaching myself programing, studying and dancing. I would like to think of myself as very Independent.
               I spend a lot of time alone; thinking about life and working on passion projects. I like to figure out things on my own, and when I am involved in a project I like having a hand in every part of said project. I am not the strongest writer but like everything else in my life, I will keep trying until I eventually am good at it (a screen reader helps as well, haha).</p>
          </Col>
          <Col xs={2} sm={3} md={3}>
          <Media query="(max-width:700px)">
          {matches => matches ? (<img src={(this.props.picture) ? this.props.picture : ""} alt="picture of Josh" style={{borderRadius:"9px",width:"9rem",marginLeft:"-2rem"}} />): (<img src={(this.props.picture) ? this.props.picture : ""} alt="picture of Josh" style={{borderRadius:"9px",width:"18rem"}} />)}
       </Media>
       </Col>
       </Row>
     </Grid>
     <br />
       </Col>
       </Row>
      <Row>
        <Col md={6}>
            <h1>Relevant Coursework</h1>
          <ul>
            {classList}
          </ul>
        </Col>
        <Col md={5}>
      <h1>Dev Environment</h1>
      <ul>
        <li>Writting code inside of <strong>Atom </strong>(with Vim keybindings) or <strong>just Vim</strong><br /><small>(VS Code sucks!)</small></li>
      <li> Running my terminal with <strong>Tmux</strong>, <strong>Oh My Zsh</strong>  and <strong> iTerm 2</strong></li>
      <li> Producting code faster with <strong>custom bash scripts</strong> and <strong>Git</strong></li>
      <li> Building personal projects in <strong>React.js</strong> and storing the data in <strong>firebase databases</strong></li>
      <li> Constructing school projects in <strong>Java</strong> or <strong>C++</strong> and runnning code with <strong>Makefiles</strong>. Debugging that code with <strong>Valgrind</strong></li>
      </ul>
    </Col>
    <Col>
      <h1>
        Certifications
      </h1>
      <ul style={{marginBottom: "6rem"}}>
        {certificationList}
      </ul>
    </Col>
    </Row>
      </Grid>
      </div>
    );
  }
}
export default About;
