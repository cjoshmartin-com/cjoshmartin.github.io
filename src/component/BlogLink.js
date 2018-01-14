import React, { Component  } from 'react';
import moment from "moment";

export default class BlogLink extends Component {

    render(){
      const toTitleCase = (str) =>
     {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     }
        return(
          <div>
            <div style={{display:'flex', marginBottom: '2rem'}}>
            <h4 style={{marginTop: '.5rem'}}>{moment(this.props.date,"x").format("MMMM Do YY")} </h4>
            <div>
            <a href={this.props.link} ><h2> | {toTitleCase(this.props.name)} </h2> </a>
            <p>{this.props.discription} </p>
          </div>
          </div>

          </div>
        );
    }

}
