import React, { Component } from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

function toTitleCase(str){
            return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
export default class BlogLink extends Component {

    render() {
        return (
            <div>
                <div style={{ display: 'flex', marginBottom: '2rem' }}>
                    <div>
                        <span>{moment(this.props.date, "x").format("MMMM YY")} </span>
                        <a href={this.props.link} ><h2> {toTitleCase(this.props.name)} </h2> </a>
                        <p>{this.props.discription} </p>
                    </div>
                </div>
            </div>
        );
    }

}

BlogLink.defaultProps = {

    name: "loading..",
    date: "1528317927909",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum porta erat. Cras placerat consectetur placerat. Integer vel maximus ante. Donec blandit nulla et augue fringilla accumsan. Curabitur feugiat pretium neque. Suspendisse efficitur feugiat sapien, sed vestibulum odio dignissim vel. Praesent efficitur vestibulum diam, a congue elit dapibus eget. Quisque eget quam non lectus ornare bibendum. Sed congue nisi at dolor fermentum, a viverra mi congue. Nullam vulputate turpis nec libero pharetra, a volutpat sapien pellentesque. Phasellus tincidunt nec velit ac elementum. Curabitur volutpat velit a fringilla ullamcorper. Etiam at risus elit. Curabitur sem nulla, euismod vel nisl sit amet, posuere gravida massa. Morbi consectetur eu orci in ultricies. Curabitur tristique magna enim, ac mattis justo varius at.",

}

BlogLink.propTypes = {

    // date: PropTypes.date,
    name: PropTypes.string,
    link: PropTypes.string,
    discription: PropTypes.string,

}
