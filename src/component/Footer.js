import React from 'react';
import { Button, Divider, Icon, Grid } from 'semantic-ui-react';
import Media from "react-media"
import PropTypes from 'prop-types';

function tomail(email){
    return "mailto:" + email;
}
const Footer = (props) => {
    return (
        <div className="footer">
            <Divider/>
            <Grid>
                <Grid.Row>
                    <Grid.Column computer={2} mobile={2}/>
                    <Grid.Column computer={4} mobile={4}>
                        <h3 className="footerText">
                            Josh Martin
                        </h3>
                        <a href={tomail(props.email)}>{props.email}</a>

                    </Grid.Column>
                    <Grid.Column computer={6} mobile={4}/>
                    <Grid.Column computer={4} mobile={4}>

                        <a href={props.links.github} target="_blank" rel="noopener noreferrer">
                            <Icon name='github' size='large' color='black' link/>
                        </a>
                        <a href={props.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <Icon name="linkedin square" size='large' color='black' link/>
                        </a>
                        <Button href={props.links.resume} target="_blank" basic color='grey'>Resume</Button><br/>
                        <Media query="(max-width:700px)">
                            {
                                matches => matches && props.last_updated ?
                                    (<p></p>)
                                    : (<p id="#dateupdate">Last updated, {props.last_updated}.</p>)
                            }
                        </Media>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

Footer.propTypes = {
    email: PropTypes.string,
    resumelink: PropTypes.string,
}

export default Footer