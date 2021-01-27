import React from 'react';
import {Col} from 'react-bootstrap';
import Media from "react-media"

import marked from "marked"
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


export {
    classList,
    certificationList,
    developerEnvironmentList,
    description,
    relevantCoursework,
    developerEnvironment,
    certifications
}
