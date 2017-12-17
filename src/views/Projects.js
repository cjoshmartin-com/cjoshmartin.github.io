import React, { Component } from 'react';

import {Grid,Col,Row } from 'react-bootstrap';
import { Card, Icon, Image, Loader, Segment, Dimmer } from 'semantic-ui-react'
import _ from 'lodash';

import * as firebase from 'firebase';
import axios from "axios";

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      projectList: [],
      isloaded: false,
    }
  }
  async componentDidMount(){

    let codepen;

    await axios.get(`http://cpv2api.com/pens/showcase/cjoshmartin/`) // codepen data
     .then(res => {
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
     });

     let gitrepos, gitreposFiltered;
     let ranorder =Math.floor((Math.random() * 10) + 1); // seed for randomize of images
      var octacat =["https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/github_projects.jpg?alt=media&token=1daa00d7-42c3-4d09-aedb-eb2eb62e7ca3","https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/octcat-with-glass-joshes-website.jpg?alt=media&token=3da43ec0-29e8-4ba6-8742-d7529cf81575","https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/classy-octcat-Joshes-website.jpeg?alt=media&token=ba89f23c-f51d-4366-94c0-08d7f9393d47"]

     await axios.get(`https://api.github.com/users/cjoshmartin/repos`).then(res=>{  // github repos data
     // eslint-disable-next-line  
     gitrepos = res.data.map((list,index)=>{
         // TODO: do I want to tell what languages were used?
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
         } // end of check for !list.fork
        })

        gitreposFiltered= gitrepos.filter(obj =>{
         return obj !== undefined
       })

       return // this function is a void function
     });
     let personaldb =[];
     const dbRef= await firebase.database().ref();
     await dbRef.on('value',snapshot=>{
       personaldb= snapshot.child("/projects").val();
   })

    var merged = _.concat(codepen, gitreposFiltered,personaldb);
    var pushed=[];
    for(var i=1;i<merged.length;i++){
      pushed[i]=merged[i * ranorder % merged.length]
    }
    this.setState({ projectList:pushed, isloaded: true });
  }

  render(){
    const projectList = this.state.projectList.map((list,index)=>{
      return(
        <Col xs={12} sm={8} md={4} key={index} className="projectGrid">
          <Card href={list.link} target="_blank" color='grey'>
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
        <Row>
          <Col md={10} sm={10} lg={10} xsOffset={2} smOffset={2} mdOffset={1} lgOffset={2} >
      </Col>
      </Row>
        <Grid>
        {(this.state.isloaded) ?<h1>Projects</h1> : <h1/> }

        <Row>
          {(this.state.isloaded) ? projectList : <Loader active> Digging through my File Cabinet! 🗃 </Loader> }
          </Row>
    </Grid>
      </div>

    ); 
  }
}
export default Projects;

