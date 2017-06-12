import React, { Component } from 'react';

class Projects extends Component{
  render(){
    return(
      <div>
        {this.props.children}
        <h1>I haven't done shit yet</h1>
        <p>Oh well</p>
      </div>
    );
  }
}
export default Projects;
