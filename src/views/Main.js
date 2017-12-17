import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { NavItem, Nav } from 'react-bootstrap';

import { Grid as Grids } from 'semantic-ui-react'

import Media from "react-media"

class Main extends Component {
  constructor(prop) {
    super(prop);

    console.log(prop);

    this.state = {
      name: "",
      description: "",
      resumelink: "",
      resumedate: "",
      email: "",
      job: "",
      interests: [],
    }
  }

  componentWillReceiveProps = (NextProps) => {

    const data = NextProps;
    this.setState({
      name: data.name,
      description: data.description,
      email: data.email,
      job: data.job,
      interests: data.interests
    })
  }

  render() {
    let interestsList;
    // console.log(this.state.interests);
    interestsList = this.state.interests.map((list, index) => {
      return (
        <span key={index} className="interests">
          "{list}"{(index < this.state.interests.length - 1) ? <span style={{ color: "black" }}>,</span> : ""}
        </span>
      );
    });
    return (
      <div className="App-intro indexPage">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className="jsonText">
                <span className="varText">const </span> <span className="varName">introduction</span> = "<span className="interests">{this.state.description}</span>"
      </div>
              <div className="jsonText">
                <span className="varText">let </span> <span className="varName">job</span> = [<span className="interests">is_hired:</span>{(this.state.job.is_hired === "False") ? <span className="errorText">False</span> : <span className="varName">True</span>}, <span className="interests">current_job:</span><span className="varName">"{this.state.job.current_job}"</span>]
      </div>
              <div className="jsonText">
                <span className="varText">let </span> <span className="varName">interest</span> = [{interestsList}]
      </div>
              <br />
              {/* TODO: MEDIA  */}

              <Media query="(min-width:700px)">
                <Grids centered columns={4}>
                  <a href="https://www.github.com/cjoshmartin">
                    <img src="http://ghchart.rshah.org/cjoshmartin" alt="cjoshmartin's Github chart" />
                  </a>
                </Grids>
              </ Media >
              <div style={{ textAlign: "center" }} className="jsonText">
                <br />
                <Grids centered columns={2}>  {/* this is a hack */}
                  <Nav bsStyle="pills"><NavItem href="#/about"><span className="varName">Class</span> learnMore(<span className="varName">User newUser</span>)<span style={{ color: "black" }}>;</span></NavItem></Nav>
                </Grids>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Main;

