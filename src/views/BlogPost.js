
import React, { Component  } from 'react';

import marked from "marked"
import moment from "moment";
import DocumentTitle from 'react-document-title'
//import DisqusThread from '../component/DisqusThread.js'
export default class BlogPost extends Component {
    state ={
        title: "",
        body: "",
        id: "",
        date_modified: "",
    }
    componentWillMount(){
        const data = this.props[this.props.id]
        this.setState(data)

    }
    componentWillReceiveProps(nextProps){
        const data = nextProps[this.props.id];
        this.setState(data)
    }


    render(){
        const toTitleCase = (str) =>
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        console.log(this.props)
        return(
            <DocumentTitle title={`Josh Martin - Blog / ${this.state.title}`} >

                <div>
                    <div>
                        <h1 style={{fontSize:'4.5rem', marginBottom: 0}}>{this.state.title}</h1>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={ {__html: marked(this.state.body)}}/>
</div>
{/*<DisqusThread
          id="e94d73ff-fd92-467d-b643-c86889f4b8be"
          title="How to integrate Disqus into ReactJS App"
          path={`/#blog/${this.props.id}`}
        /> */}

                </ div>
            
             </DocumentTitle>
            )

            }

            }
