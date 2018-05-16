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

import { Route, Switch,Redirect } from 'react-router-dom'

import DocumentTitle from 'react-document-title'
import _ from 'lodash';
import axios from "axios";
import moment from "moment";

const ranorder = Math.floor((Math.random() * 10) + 1); // seed for randomize of images

function codepenList(res = {}) {
    return res.data.data.map((list, index) => {
        return {
            title: _.startCase(list.title),
            images: { small: list.images.small },
            details: _.capitalize(list.details),
            link: list.link,
            icon: {
                name: "Codepen",
                icon: "codepen",
            }
        }
    })
}
function githubRepoList(res = {}){
    const octacats = [
        "https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/github_projects.jpg?alt=media&token=1daa00d7-42c3-4d09-aedb-eb2eb62e7ca3",
        "https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/octcat-with-glass-joshes-website.jpg?alt=media&token=3da43ec0-29e8-4ba6-8742-d7529cf81575",
        "https://firebasestorage.googleapis.com/v0/b/cjoshmartin-f652e.appspot.com/o/classy-octcat-Joshes-website.jpeg?alt=media&token=ba89f23c-f51d-4366-94c0-08d7f9393d47"
    ]

    return res.data.map((list, index) => {
        // TODO: do I want to tell what languages were used?
        if (!list.fork) {
            return {
                title: _.startCase(list.name),
                images: {
                    small:octacats[index * ranorder % 3]
                },
                details: _.capitalize(list.description),
                link: list.html_url,
                icon: {
                    name: "Github",
                    icon: "github"
                }
            }
        } // end of check for !list.fork
        return undefined;
    }).filter(obj => {
        return obj !== undefined
    })
}
export default class App extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            data: {},
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

        db.on('value', firebaseData => {
            this.setState({ data: firebaseData.val(), link: firebaseData.val().resume.link })
        })

        let codepen = await axios.get(`http://cpv2api.com/pens/showcase/cjoshmartin/`) // codepen data
            .then(res => {
               return codepenList(res)
            });

        this.setState({codepen})

        let gitrepos = await axios.get(`https://api.github.com/users/cjoshmartin/repos`)
        .then(res => githubRepoList(res));

        const github = {...this.state.github };
        github.repos = gitrepos;

        await axios.get(`https://api.github.com/repos/cjoshmartin/cjoshmartin.github.io`)
            .then(res => {
                github.website.last_updated = moment(res.data.pushed_at, "YYYY-MM-DDThh:mm:ssZ").fromNow();
                this.setState({github})
            })
    }

    render() {
        return (
            <DocumentTitle title="Josh Martin">
                <div className="App" >
                    <Header name={this.state.data.name} />

                    <Switch>
                        <Route exact={true} path="/" render={() => (<Main {...this.state.data} />)} />
                        <Route path="/about" render={() => (<About {...this.state.data} />)} />
                        <Route path="/projects" render={() => (<Projects codepen={this.state.codepen} octacats={this.state.octacats} github={this.state.github.repos} misc_projects={this.state.data.projects} />)} />
                        <Route exact path="/blog" render={(parms) => (<Redirect to={`/blog/${Object.keys(this.state.data.blog)[0]}`} />)} />
                        <Route path='/blog/:id' render={(url) => (<Blog post={this.state.data.blog} id={url.match.params.id} />)} />
                    </Switch>

                    <Footer {...this.state.data} links={this.state.links} last_updated={this.state.github.website.last_updated} />
                </div>
            </DocumentTitle>
        );
    }
}