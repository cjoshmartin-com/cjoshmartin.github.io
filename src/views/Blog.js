import React from 'react';
import { Col,Row } from 'react-bootstrap';
import BlogLink from '../component/BlogLink';
import BlogPost from './BlogPost';

import removeMd from 'remove-markdown'
import DocumentTitle from 'react-document-title'

function posts(props = { title: ""}){
    return Object.keys(props).map((key,i) =>{
        const data = props[key]
        return(
            <BlogLink
                name={data.title}
                key={i} discription={toTruncate(removeMd(data.body)) }
                link={`#/blog/${key}`}

                date={ (data.date_modified === 'N/A') ? key : data.date_modified } />
        )
    })
}
function toTruncate(str ="")
{
    const sizeToTrun = 60;
    if (str.length > sizeToTrun)
        return str.substr(0,sizeToTrun) + "...";

    return str;

}

const Blog = (props) => {
    return (
        <DocumentTitle title={"Josh Martin - Blog"} >
            <div>
                <Row>
                    <Col lg={3} md={3} sm={3} xsOffset={1}>
                        <h1 style={{display:'flex'}}>Blog</h1>

                        {posts(props.post)}

                    </Col>
                    <Col lg={7} md={7} sm={6} xsOffset={0} lgOffset={0}>
                             <BlogPost {...props} id={props.id}/>
                    </Col>
                </Row>

            </div>
        </DocumentTitle>
    );
}

export default Blog
