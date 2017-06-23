import React, { Component } from 'react';

import {Grid,Col,Row } from 'react-bootstrap';
import { Card, Icon, Image } from 'semantic-ui-react'
import _ from 'lodash';


import axios from "axios";

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      projectList: [],
    }
  }
  async componentDidMount(){
    let codepen;
    await axios.get(`https://cpv2api.com/pens/showcase/cjoshmartin/`) // codepen data
     .then(res => {
       console.log(res.data.data);
      codepen =res.data.data.map((list,index)=>{
        return{
          title: _.startCase(list.title),
          images: {
            small:list.images.small
          },
          details: _.capitalize(list.details),
          link: list.link,
          icon:{
            name: "Codepen",
            icon: "codepen"
          }
        }
      })
      //  console.log(this.state.projectList)
     });
     let gitrepos;
     let gitreposFiltered;
     let ranorder =Math.floor((Math.random() * 10) + 1);
      var octacat =["https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/github_projects.jpg?alt=media&token=1daa00d7-42c3-4d09-aedb-eb2eb62e7ca3","https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/octcat-with-glass-joshes-website.jpg?alt=media&token=3da43ec0-29e8-4ba6-8742-d7529cf81575","https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/classy-octcat-Joshes-website.jpeg?alt=media&token=ba89f23c-f51d-4366-94c0-08d7f9393d47"]
     await axios.get(`https://api.github.com/users/cjoshmartin/subscriptions`).then(res=>{  // github repos data
       gitrepos = res.data.map((list,index)=>{
         // TODO: do I want to tell what lanage was used?
         if(!list.fork){
           return{
             title: _.startCase(list.name),
             images: {
               small:octacat[index * ranorder % 3]
             },
             details: _.capitalize(list.description),
             link: list.html_url,
             icon:{
               name: "Github",
               icon: "github"
             }
           }
         }
       })
        gitreposFiltered= gitrepos.filter(obj =>{
         return obj !== undefined
       })
     });

    var merged = _.concat(codepen, gitreposFiltered);
    var pushed=[];
    for(var i=0;i<merged.length;i++){
      pushed[i]=merged[i * ranorder % merged.length]
    }
    console.log(pushed);
    this.setState({ projectList:pushed });
  }

  render(){
    // console.log(this.state.projectList)
    const projectList = this.state.projectList.map((list,index)=>{
      // console.log(list)
      return(
        <Col xs={6} md={4} key={index}  color='grey'>
          <Card href={list.link} target="_blank">
            <Image src={list.images.small} alt={list.title} fluid/>
            <Card.Content>
              <Card.Header>
                {list.title}
              </Card.Header>
              <Card.Description  dangerouslySetInnerHTML={ {__html: list.details} }/>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name={list.icon.icon} />
                {list.icon.name}
              </a>
            </Card.Content>
          </Card>
        </Col>
      );
    });
    return(
      <div>
        <Grid>
        <Row>
          {projectList}
          </Row>
    </Grid>
      </div>

    );
  }
}
export default Projects;


/* <Card.Content extra>
  <a>
    <Icon name='user' />
    22 Friends
  </a>
</Card.Content> */

/*
<Thumbnail  >
  <h3></h3>
  <p>{list.views} views</p>
   <div dangerouslySetInnerHTML={ {__html: list.details} } />
  <p>
    <Button bsStyle="primary" href={list.link} target="_blank">Click to View</Button>&nbsp;
  </p>
</Thumbnail>
*/
