import React, { Component } from 'react';

import { Button,Divider,Icon, Grid} from 'semantic-ui-react';

import axios from "axios";
import moment from "moment";
import Media from "react-media"



class Footer extends Component{
    constructor(prop){
        super(prop);
        
        this.state ={
         updated: "",
       }
     }
      componentDidMount(){
        axios.get(`https://api.github.com/repos/cjoshmartin/cjoshmartin.github.io`)
        .then(res => {
            this.setState({updated:moment(res.data.pushed_at, "YYYY-MM-DDThh:mm:ssZ").fromNow()}) // check when the this repo was last pushed and formats date
        })
     }
  render(){

    var tomail =function (email) {
      return "mailto:"+email;
    }
      var data = this.props;
    return(
      <div className="footer">
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column computer={2} mobile={2}/>
        <Grid.Column computer={4} moblie={4}>
        <h3 className="footerText">
          Josh Martin
        </h3>
        <a href={tomail(data.email)}>{data.email}</a>
      </Grid.Column>
        <Grid.Column computer={6} mobile={4}/>
        <Grid.Column computer={4} mobile={4}>
        <a href="https://www.github.com/cjoshmartin" target="_blank">
        <Icon name='github'  size='large' color='black' link/>
        </a>
        <a href="https://www.linkedin.com/in/joshua-martin-55740652/" target="_blank">
          <Icon name="linkedin square"  size='large' color='black' link/>
        </a>
          <Button href={data.resumelink} target="_blank" basic color='grey'>Resume</Button><br />
          <Media query="(max-width:700px)">
          {matches => matches ? (<p></p>): (<p id="#dateupdate">Last updated, {this.state.updated}.</p>)}
       </Media>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
    );
  }
}
export default Footer;
