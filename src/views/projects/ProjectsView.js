import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {Card} from 'semantic-ui-react'
import DocumentTitle from 'react-document-title'

import {createProjectList, mergeProjects} from "./ProjectsUtils";


const ProjectsView = (props) => {
        return (
            <DocumentTitle title={"Josh Martin - Projects"}>
                <div>
                    <Row>
                        <Col md={10} sm={10} lg={10} xsOffset={2} smOffset={2} mdOffset={1} lgOffset={2} >
                        </Col>
                    </Row>
                    <Grid>
                        <h1>Projects</h1>
                        <Card.Group itemsPerRow={2} >
                            {
                                createProjectList(
                                    mergeProjects(props.codepen, props.github, props.misc_projects)
                                )
                            }
                        </Card.Group>
                    </Grid>
                </div>
            </DocumentTitle>
        );
    };

export default ProjectsView;
