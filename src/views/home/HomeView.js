import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import {githubCommitImage, interest, introduction, job, learnMore} from "./HomeUtils";


export default class HomeView extends Component {

  render() {
    return (
      <div className="App-intro indexPage">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>
              {introduction(this.props.description)}
              {job(this.props.job)}
              {interest(this.props.interests)}
              <br />
              {githubCommitImage()}
              {learnMore()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


HomeView.defaultProps = {
  job: { 
    is_hired: "False",
    current_job: "",
    description: "Firebase DB is loading...",
    interest: [],
  }
}

HomeView.propTypes = {
  job: PropTypes.object,
  interest: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
}