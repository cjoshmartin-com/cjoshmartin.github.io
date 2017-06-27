import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button,Divider,Icon, Grid} from 'semantic-ui-react';
import {OverlayTrigger,Tooltip} from 'react-bootstrap';


import axios from "axios";
import moment from "moment";
import _ from 'lodash';

class Footer extends Component{
    constructor(prop){
        super(prop);
        this.state ={
         email: "",
         resumelink: "",
         updated: "",
         resumedate: ""
       }
     }
      componentDidMount(){
       const rootRef= firebase.database().ref();
         rootRef.on('value',snapshot =>{
         var data =snapshot.child("/").val();
         this.setState({email:data.email, resumelink: data.resume.link, resumedate: data.resume.date})

       })
        axios.get(`https://api.github.com/repos/cjoshmartin/cjoshmartin.github.io`)
        .then(res => {
             var currentDate =res.data.pushed_at;
             var temp =currentDate.split('T');
             currentDate =temp[0];
            this.setState({updated:moment(currentDate, "YYYY-MM-DD").fromNow()})
        })
     }
  render(){
    var currentYear = (new Date()).getFullYear();
    var tomail =function (email) {
      return "mailto:"+email;
    }
    const tooltip = (
    <Tooltip id="tooltip">Last Updated: {this.state.resumedate}</Tooltip>
  );
    return(
      <div className="footer">
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}/>
        <Grid.Column width={4}>
        <h3 className="footerText">
          Josh Martin
        </h3>
        <a href={tomail(this.state.email)}>{this.state.email}</a>
      </Grid.Column>
        <Grid.Column width={6}/>
        <Grid.Column width={4}>
        <a href="https://www.github.com/cjoshmartin" target="_blank">
        <Icon name='github'  size='large' color='black' link/>
        </a>
        <a href="https://www.linkedin.com/in/joshua-martin-55740652/" target="_blank">
          <Icon name="linkedin square"  size='large' color='black' link/>
        </a>
        {/* <OverlayTrigger placement="right" overlay={tooltip}> */}
          <Button href={this.state.resumelink} target="_blank" basic color='grey'>Resume</Button><br />
          {/* </OverlayTrigger> */}
          <p id="#dateupdated">Last updated {this.state.updated}.</p>
      </Grid.Column>
      </Grid.Row>
      </Grid>

      </div>
    );
  }
}
export default Footer;
