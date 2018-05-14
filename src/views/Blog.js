import React from 'react';
import { Col,Row } from 'react-bootstrap';
import BlogLink from '../component/BlogLink';

import removeMd from 'remove-markdown'

import DocumentTitle from 'react-document-title'

function posts(props = {}){
 return Object.keys(props).map((key,i) =>{
    const data = props[key]
    return(
      <BlogLink 
      name={data.title} 
      key={i} discription={removeMd(data.body)} 
      link={`#/blog/${key}`}

      date={
        (data.date_modified === 'N/A') ? 
      key :
       data.date_modified
      } />
    )
  })
}

const Blog = (props) => {
  return (
    <DocumentTitle title={"Josh Martin - Blog"} >
    <div>
      <Row>
        <Col md={10} lg={10} sm={10} xsOffset={1} smOffset={1} lgOffset={2} >
          <h1 style={{display:'flex'}}>Blog</h1>
          {posts(props)}
        </Col>
      </Row>
    </div>
  </DocumentTitle>
  );
}

export default  Blog
