import React from 'react';


import {Loader} from "semantic-ui-react"

export default function IsLoaded(props) {
    
    if (!props.loaded) {
        return <Loader active inline="centered" size="large"/>
    }


    return (<span>{props.children}</span>)

}
