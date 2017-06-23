import React, { Component } from 'react';
import * as firebase from 'firebase';

class About extends Component{
  constructor(props){
  super(props);
    this.state={
      classList:[],
    }
  }

async componentDidMount(){
    const dbRef= await firebase.database().ref();
    dbRef.on('value',snapshot=>{
   var data = snapshot.child("/classes").val();
    // console.log(JSON.stringify(data[0],null,' '));
    this.setState({classList:data});
    //console.log(JSON.stringify(this.state.obj,null,' '));
  })
  }
  render(){
    const classList = this.state.classList.reverse().map((list, index) => {
      console.log(list)
     return (
       <p key={index}>{list.name}, {list.semester} ({list.classnumber})</p>
     );
   });
    return(

      <div>
        <h1>This is the About page</h1>
        <p><strong>I am Josh Martin, an undergaduate at Indaina University Purdue University Indainapolis studying Computer Engineering</strong> I love to make things. I spend most of my time teaching myself programing and dancing.</p>
        <h1>Relevant Coursework</h1>
        {classList}
      </div>
    );
  }
}
export default About;
