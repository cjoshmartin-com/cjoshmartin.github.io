import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import Footer from "../component/Footer"

import Main from './Main';
import About from "./About";
import Projects from "./Projects";
// import Blog from './Blog';

import { db } from '../firebase'

import { Route, Switch } from 'react-router-dom'

class App extends Component {

    constructor(prop){
        super(prop)

        this.state ={
            data: {},
        }
    }

    componentWillMount(){
        
        db.on('value',snapshot => { 
            this.setState( { data: snapshot.val() } ) 
        } )
    }

  render() {
    return (
      <div className="App" >
        <Header  name={this.state.data.name} />
        <Switch>
         <Route exact={true} path="/" render={ ()=>( <Main {...this.state.data} /> ) }/> 
         <Route path="/about" render={()=> (<About {...this.state.data}/>)}/>
         <Route path="/projects" render={()=>(<Projects />)}/>
         {/* <Route path="/blog" component={Blog} /> */}
        </Switch>
        {/* console.log(this.state.data) */}
        <Footer {...this.state.data}/>
      </div>
    );
  }
}

export default App;
