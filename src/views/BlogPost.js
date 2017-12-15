import React, { Component  } from 'react';

export default class BlogPost extends Component {
    render(){
        return(
            <a href={this.props.link} >
                <h1> {this.props.name} </h1>
                <p>{this.props.discription} </p>
            </a>
        );
    }

}
