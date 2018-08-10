import React, { Component } from 'react';
import '../../App.css';
import Header from "../../component/Header"
import Footer from "../../component/Footer"

import HomeView from '../home/HomeView';
import AboutView from "../about/AboutView";
import ProjectsView from "../projects/ProjectsView";
import BlogView from '../blog/BlogView';

import database from '../../firebase'

import { Route, Switch,Redirect } from 'react-router-dom'
import {Loader} from "semantic-ui-react"
import DocumentTitle from 'react-document-title'
import axios from "axios";
import moment from "moment";
import {codepenList, githubRepoList} from "./MainAppUtils";

export default class MainAppContainer extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            data: {},
            isDataSynced: false,
            codepen: {},
            github: {
                repos: {},
                website: {
                    last_updated: "",
                },
            },
            links: {
                resume: "",
                github: "https://github.com/cjoshmartin/",
                linkedin: "https://www.linkedin.com/in/joshua-martin-55740652/",
            },
        }
    }

    async componentWillMount() {
        const nextState ={};

        nextState.codepen = await axios.get(`http://cpv2api.com/pens/showcase/cjoshmartin/`) // codepen data
            .then(res => {
                return codepenList(res)
            });

        nextState.github = {...this.state.github };
        nextState.github.repos = await axios.get(`https://api.github.com/users/cjoshmartin/repos`)
            .then(res => githubRepoList(res));

        await axios.get(`https://api.github.com/repos/cjoshmartin/cjoshmartin.github.io`)
            .then(res => {
                nextState.github.website.last_updated = moment(res.data.pushed_at, "YYYY-MM-DDThh:mm:ssZ").fromNow();
            })

        this.setState(
            nextState,
            this.syncData()
        )
    }

    syncData = () => {
        this.bindingRef = database.bindToState('/',
            {
                context: this,
                state: 'data',
                then: () => {
                    const ordered = {};
                    const nextState = {...this.state}

                    Object.keys(nextState.data.blog).sort((a,b)=> b-a).forEach(function(key) {
                        ordered[key] = nextState.data.blog[key];
                    });

                    this.setState({
                        data:{
                            ...nextState.data,
                            blog: ordered,
                        },
                        links: {
                            ...nextState.links,
                          resume:   nextState.data.resume.link
                        },
                        isDataSynced: true
                    })
                }
            }

        )
    };

    render() {
        return (
            <DocumentTitle title="Josh Martin">
                <div className="App" >
                    <Header name={this.state.data.name} />
                    { this.state.isDataSynced ?
                        <div>
                            <Switch>
                                <Route
                                    exact={true} path="/"
                                    render={() => (<HomeView {...this.state.data} />)}/>

                                <Route
                                    path="/about"
                                    render={() => (<AboutView {...this.state.data} />)}
                                />

                                <Route path="/projects" render={
                                    () => (<ProjectsView
                                            codepen={this.state.codepen}
                                            octacats={this.state.octacats}
                                            github={this.state.github.repos}
                                            misc_projects={this.state.data.projects}/>
                                    )}
                                />
                                <Route
                                    exact path="/blog"
                                    render={
                                        () => (
                                            <Redirect
                                                to={`/blog/${Object.keys(this.state.data.blog)[0]}`}
                                            />
                                        )}
                                />
                                <Route
                                    path='/blog/:id'
                                    render={
                                        (url) => (
                                            <BlogView
                                                post={this.state.data.blog}
                                                id={url.match.params.id}/>)}
                                />
                            </Switch>

                            <Footer
                                {...this.state.data}
                                links={this.state.links}
                                last_updated={this.state.github.website.last_updated} />
                        </div>
                        // eslint-disable-next-line
                        :<Loader active inline="centered" size="large"></Loader>
                    }
                </div>
            </DocumentTitle>
        );
    }
}