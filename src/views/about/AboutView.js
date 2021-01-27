import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import {
    description,
    relevantCoursework,
    developerEnvironment,
    certifications
} from './AboutUtils'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'


 const AboutView = (props) => {
        return (
            <DocumentTitle title={"Josh Martin - About"}>
                <div className="indexPage">

                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Grid>
                                    <Row>
                                        {description(props.about.me)}
                                    </Row>
                                </Grid>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            {relevantCoursework(props.classes)}
                            {developerEnvironment(props.about.dev_env)}
                            {certifications(props.certifications)}
                        </Row>
                    </Grid>
                </div>
            </DocumentTitle>
        );
};

export default AboutView

AboutView.defaultProps = {
    about: {
        me: "db has fail, please refresh",
    },
    class : {},
    picture: "",
};

AboutView.protoTypes = {
    about: PropTypes.object,
    picture: PropTypes.string,
    class: PropTypes.array,
    certifications: PropTypes.array,
};
