import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';
import { Card, Icon, Image, Loader } from 'semantic-ui-react'
import _ from 'lodash';

import DocumentTitle from 'react-document-title'

function projectList(projects = []) {
  return projects.map((list, index) => {
    return ( 
      <Col xs={12} sm={8} md={4} key={index} className="projectGrid">
      <Card key={index} href={list.link} target="_blank" color='grey'>
        <Image src={list.images.small} alt={list.title} fluid />
        <Card.Content>
          <Card.Header>
            {list.title}
          </Card.Header>
          <Card.Description dangerouslySetInnerHTML={{ __html: list.details }} />
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
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      isloaded: false,
    }
  }
  async componentWillMount() {
    var merged = _.concat(this.props.codepen, this.props.github, this.props.misc_projects);
    var pushed = [];
const ranorder = Math.floor((Math.random() * 10) + 1); // seed for randomize of images
    for (var i = 0; i < merged.length; i++) {
      pushed[i] = merged[i * ranorder % merged.length]
    }
    this.setState({ projectList: merged, isloaded: true });
  }

  render() {
    const projects =_.concat(this.props.codepen, this.props.github, this.props.misc_projects)
    .filter(obj => {
        return obj !== undefined && Object.keys(obj).length > 0 
    })
    return (
      <DocumentTitle title={"Josh Martin - Projects"}>
        <div>
          <Row>
            <Col md={10} sm={10} lg={10} xsOffset={2} smOffset={2} mdOffset={1} lgOffset={2} >
            </Col>
          </Row>
          <Grid>
            {
              (this.state.isloaded) 
            ? <h1>Projects</h1> 
            : ""
          }
            {
              (this.state.isloaded) ? 
            <Card.Group itemsPerRow={2} > {projectList(projects)} </Card.Group> 
            : <Col className="projectGrid" ><Loader active inline="centered" size="medium"> 
            Digging through my File Cabinet! 🗃 
            </Loader> 
            </Col>
          }
          </Grid>
        </div>
      </DocumentTitle>
    );
  }
}
export default Projects;
