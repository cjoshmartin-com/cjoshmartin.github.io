import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'
import _ from 'lodash';

function createProjectList(projects = []) {
    return projects.map((list, index) => {
        return (
                <Card key={index} href={list.link} target="_blank" color='grey'>

                    <Image src={list.images.small} alt={list.title} fluid />


                    <Card.Content>

                        <Card.Header> {list.title} </Card.Header>

                        <Card.Description dangerouslySetInnerHTML={{ __html: list.details }} />

                    </Card.Content>


                    <Card.Content extra>

                            <Icon name={list.icon.icon} />

                            {list.icon.name}

                    </Card.Content>


                </Card>
        );
    });
}
function mergeProjects(codepen,github,misc_projects)
{
    return _.concat(codepen,github,misc_projects)
            .filter(obj => {
                return obj !== undefined && Object.keys(obj).length > 0
            })
}
export {
    createProjectList,
    mergeProjects
}
