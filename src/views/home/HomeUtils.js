import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';

import { Grid as Grids } from 'semantic-ui-react'

import Media from "react-media"
import TypeText from '../../component/TypeText'

function interestList(interests = [])
{
    return interests.map((list, index) => {
            return (
                <span key={index} className="interests">
          "{list}"
                    {
                        (index < interests.length - 1) ?
                            <span style={{ color: "black" }}>,</span>
                            : ""
                    }
        </span>
            );
        }
    );
}
const introduction = (description = "") => {
    return (

        <div className="jsonText">
            <span className="varText">const </span>
            <span className="varName">introduction</span>
            = "<span className="interests">{description}</span>"
        </div>
    )
}

const job = (status = {current_job: "Firebase DB is loading...", is_hired: "False"} ) => {
    return (
        <div className="jsonText">
            <span className="varText">let </span>
            <span className="varName">job</span>
            = [
            <span className="interests">is_hired:</span>
            { (status.is_hired === "True") ? <span className="varName">True</span>
                : <span className="errorText">False</span>
            },
            <span className="interests">current_job:</span>

            <span className="varName">
            "{status.current_job}"
            </span>
            ]
        </div>
    )
}
const interest = (interests= []) => {
    return (
        <div className="jsonText">
            <span className="varText">let </span>
            <span className="varName">interest</span>
            = [{interestList(interests)}]
        </div>
    )
}

const githubCommitImage = () => {
    const github = {
        url: "https://www.github.com/cjoshmartin",
        graph: {
            img: "https://ghchart.rshah.org/cjoshmartin",
            alt: "cjoshmartin's Github chart",
        },
    }

    return (<Media query="(min-width:700px)">
            <Grids centered columns={4}>
                <a href={github.url}>
                    <img src={github.graph.img} alt={github.graph.alt} />
                </a>
            </Grids>
        </ Media >
    )

}

const learnMore = () => {
    return (
        <div style={{ textAlign: "center" }} className="jsonText">
            <br />
            <Grids centered columns={2}>
                <Nav bsStyle="pills">
                    <NavItem href="#/about">
                        <TypeText />
                    </NavItem>
                </Nav>
            </Grids>
        </div>
    )
}

export {
    introduction,
    job,
    interest,
    githubCommitImage,
    learnMore
}
