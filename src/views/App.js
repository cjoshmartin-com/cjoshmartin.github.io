import React, { Component } from 'react';
import '../App.css';
import Header from "../component/Header"
import Footer from "../component/Footer"

import Main from './Main';
import About from "./About";
import Projects from "./Projects";
import Blog from './Blog';
import BlogPost from './BlogPost'

import { db } from '../firebase'

import { Route, Switch } from 'react-router-dom'

import DocumentTitle from 'react-document-title'

class App extends Component {

    constructor(prop){
        super(prop)

        this.state ={
            data: {},
            link: "",
        }
    }

    componentWillMount(){
        db.on('value',snapshot => {
            this.setState( { data: snapshot.val(), link: snapshot.val().resume.link } )
        })
    }

  render() {
    return (
      <DocumentTitle title="Josh Martin">
      <div className="App" >
        <Header  name={this.state.data.name} />
        <Switch>
         <Route exact={true} path="/" render={ ()=>( <Main {...this.state.data} /> ) }/>
         <Route path="/about" render={()=> (<About {...this.state.data}/>)}/>
         <Route path="/projects" render={()=>(<Projects />)}/>
        <Route exact path="/blog" render={() => (<Blog {... this.state.data.blog} />)} />
        <Route path='/blog/:id' render={ (url) => (<BlogPost {...this.state.data.blog} id={url.match.params.id} /> )  } />
        </Switch>
        <Footer {...this.state.data} resumelink={this.state.link}/>
      </div>
    </DocumentTitle>
    );
  }
}

export default App;
