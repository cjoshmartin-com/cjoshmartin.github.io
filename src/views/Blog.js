import React, { Component  } from 'react';
import { Col,Row } from 'react-bootstrap';

import BlogPost from './BlogPost';

export default class Blog extends Component {
    render(){
        return (
            <div>
            <Row>
            <Col md={10} lg={10} sm={10} xsOffset={1} smOffset={1} lgOffset={2} >
                <h1>Blog</h1>
                <BlogPost name={"Tacos"} discription={"this should be cut off after some length" } link={"https://www.google.com"} />
            </Col>
            </Row>
            </div>
        );
    }
}
