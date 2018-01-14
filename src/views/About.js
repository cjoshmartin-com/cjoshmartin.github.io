import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import {Loader} from "semantic-ui-react"
import Media from "react-media"

import marked from "marked"

import DocumentTitle from 'react-document-title'

export default class About extends Component{

  render(){
    let classList,certificationList, dev_envList;


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
   dev_envList = this.props.about.dev_env.map((list,i)=>{
     return(
      <li key={i} dangerouslySetInnerHTML={ {__html: marked(list)}} />
     )
   })
  }
    return(
      <DocumentTitle title={"Josh Martin - About"}>
      <div className="indexPage">
        {
          (this.props.about) ?
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>

        <Grid>
          <Row>
            <Col xs={8} sm={8} md={7}>
              <h1>This is the About page</h1>
              {this.props.about ? <p dangerouslySetInnerHTML={ {__html: marked(this.props.about.me)}}/> : ""}
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
        {dev_envList}
      </ul>
    </Col>
    <Col>
      <h1>Certifications</h1>
      <ul style={{marginBottom: "6rem"}}>
        {certificationList}
      </ul>
    </Col>
    </Row>
      </Grid>

      : // else
      <Loader active inline="centered" size="medium"> Thinking 🤔 </Loader>
    }
      </div>
    </DocumentTitle>
    );
  }
}
