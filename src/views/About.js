import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Media from "react-media"

import marked from "marked"

import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'

function classList( classes = [])
{
    return classes.map((list, index) => {
        return (
            <li key={index}>{list.name}, {list.semester} ({list.classnumber})</li>
        )
    })

}

function certificationList(certifications = [])
{
    return certifications.map((list,i)=>{
        return (
            <li key={i}>
                <h3 style={{marginBottom:"0"}}>{list.type} Certification</h3>
                <strong>{list.from}</strong><br />
                <small>{list.date}</small>
                <p>{list.description}</p>
                <br />
            </li>
        )
    })
}

function developerEnvironmentList(dev_env =[])
{
    return dev_env.map((list, i) => {
        return (
            <li key={i} dangerouslySetInnerHTML={{ __html: marked(list) }} />
        )
    })
}



const description = (me = "") => {
    return (

        <Col xs={8} sm={8} md={7}>
            <h1>This is the About page</h1>
            <p dangerouslySetInnerHTML={{ __html: marked(me) }} />
        </Col>
    )
};

const  picture = (picture = "") => {
    const alt_text = "picture of Josh";
    const common_styles = {
        borderRadius: "9px",
        width: "9rem",
    };
    return (
        <Col xs={2} sm={3} md={3}>
            <Media query="(max-width:700px)">
                {
                    matches => matches
                        ? <img src={picture} alt={alt_text} style={matches => matches ?{common_styles,marginLeft: "-2rem" } : {common_styles}} />
                        : <img src={picture} alt={alt_text} style={{common_styles }} />
                }
            </Media>
        </Col>
    )
};

const relevantCoursework = (classes = [] ) => {
    return (
        <Col md={6}>
            <h1>Relevant Coursework</h1>
            <ul>
                {classList(classes)}
            </ul>
        </Col>
    )
};

const developerEnvironment = (dev_env =[]) => {
    return (
        <Col md={5}>
            <h1>Dev Environment</h1>
            <ul>
                {developerEnvironmentList(dev_env)}
            </ul>
        </Col>
    )
};

const certifications = (certificationsItems = []) => {
    return (
        <Col>
            <h1>Certifications</h1>
            <ul style={{marginBottom: "6rem"}}>
                {certificationList(certificationsItems)}
            </ul>
        </Col>
    )
};

 const About = (props) => {
        return (
            <DocumentTitle title={"Josh Martin - About"}>
                <div className="indexPage">

                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Grid>
                                    <Row>
                                        {description(props.about.me)}
                                        {picture(props.picture)}
                                    </Row>
                                </Grid>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            {relevantCoursework(props.classes)}
                            {developerEnvironment(props.about.dev_env)}
                            {certifications(props.certifications)}
                        </Row>
                    </Grid>
                </div>
            </DocumentTitle>
        );
};

export default About

About.defaultProps = {
    about: {
        me: "db has fail, please refresh",
    },
    class : {},
    picture: "",
};

About.protoTypes = {
    about: PropTypes.object,
    picture: PropTypes.string,
    class: PropTypes.array,
    certifications: PropTypes.array,
};