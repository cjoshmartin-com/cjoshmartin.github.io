import React from 'react';
import DocumentTitle from 'react-document-title'

import {createProjectList, mergeProjects} from "./ProjectsUtils";

export default function ProjectsView(props){
        
        const cards = createProjectList(
                            mergeProjects(
                            props.codepen,
                            props.github,
                            props.misc_projects
                            )
                        )

        return (
            <DocumentTitle title={"Josh Martin - Projects"}>
                <div className="projectPage">
                    <h1 className="projectTitle">Projects</h1>
                    <div className="projectGrid">
                        {cards}
                    </div>
                </div>
            </DocumentTitle>
        );
    };

