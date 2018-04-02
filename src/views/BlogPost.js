
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
        console.log(this.props)
        const toTitleCase = (str) =>
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

        return(
            <DocumentTitle title={`Josh Martin - Blog / ${this.state.title}`} >

                <div>
                    <div style={{display:'flex', alignItems: 'center',justifyContent: 'center', flexDirection: 'column',}}>
                        <h1 style={{fontSize:'4.5rem', marginBottom: 0}}>{toTitleCase(this.state.title)}</h1>
                        <h4 style={{marginTop: 0, marginBottom: '3rem'}}>
                            {(this.state.date_modified !== 'N/A') ? <span>{moment(this.state.date_modified, "x").calendar()}</span> : <span>{moment(this.props.id, "x").calendar()}</span>}</h4>

                    </div>
                    <div style={{display:'flex', alignItems: 'center',justifyContent: 'center',}}>
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
