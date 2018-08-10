
import React, { Component } from 'react';
import Typed from 'typed.js';

export default class TypeText extends Component {

    componentDidMount()
    {
        this.typed = new Typed(".jsonTexts",{
            strings: [`<span class="varName">Class</span> learnMore(<span class="varName">User newUser</span>)<span style="color: "black"; ">;</span>`],
            typeSpeed: 50,
        })   
    }

    componentWillUnmount()
    {
        this.typed.destroy();
    }

    render(){
        return(
            <span className="jsonTexts"/>
        );
    }
} 