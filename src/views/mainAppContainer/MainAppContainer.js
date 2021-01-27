import React, { useState, useEffect } from 'react';
import '../../App.css';
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import IsLoaded from "../../component/IsLoaded"

import HomeView from '../home/HomeView';
import ProjectsView from "../projects/ProjectsView";

import database from '../../firebase'

import { Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import axios from "axios";
import moment from "moment";
import {codepenList, githubRepoList} from "./MainAppUtils";


const data = {}

const links = {
resume: "http://resume.cjoshmartin.com/",
github: "https://github.com/cjoshmartin/",
linkedin: "https://www.linkedin.com/in/joshua-martin-55740652/",
}

const picture = "https://avatars1.githubusercontent.com/u/8135112?v=3"


export default function MainAppContainer() {
    const [isDataSynced, setIsDataSynced] = useState(true)
    const [codepen, setCodepen] = useState({})
    const [github, setGithub] = useState({
                    repos: {},
                    website: {
                        last_updated: "",
                    },
                })


    useEffect(() =>{
        axios.get(`https://cpv2api.herokuapp.com/pens/showcase/cjoshmartin`) // codepen data
                    .then(res => {
                        setCodepen(codepenList(res))
                    });
        
        Promise.all([
            axios.get(`https://api.github.com/users/cjoshmartin/repos?per_page=100`),
            axios.get(`https://api.github.com/repos/cjoshmartin/cjoshmartin.github.io`)
        ])
            
        .then(promises => {
            const repos = promises[0]
            const update_date = promises[1]

            const _github = {
                repos: githubRepoList(repos),
                website: {
                    last_updated: moment(update_date.data.pushed_at, "YYYY-MM-DDThh:mm:ssZ").fromNow(),
                },
            }

            setGithub(_github)
        });

    }, [])


    
        return (
            <DocumentTitle title="Josh Martin">
                <div className="App" >
                    <Header name={data?.name ?? "Josh"} />
                    <IsLoaded
                        loaded={isDataSynced} 
                    >
                        <Switch>
                            <Route
                                exact={true} path="/"
                                render={() => (<HomeView picture={picture} />)}/>

                        <Route path="/projects" render={
                                    () => (<ProjectsView
                                        codepen={codepen}
                                        //octacats={this.state.octacats}
                                        github={github.repos}
                                        misc_projects={data?.projects ?? {}}/>
                                    )}
                                />
                            </Switch>

                            <Footer
                                email={"contact@cjoshmartin.com"}
                                links={links}
                                last_updated={github.website.last_updated} />
                        </IsLoaded>

                    </div>
                </DocumentTitle>
        );
}

