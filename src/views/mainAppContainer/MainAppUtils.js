import React from 'react';
import _ from 'lodash';
import base64Images from '../../images/base64Images'

function codepenList(res = {}) {
    return res.data.data.map((list, index) => ({
            title: _.startCase(list.title),
            images: { small: list.images.small },
            details: _.capitalize(list.details),
            link: list.link,
            icon: {
                name: "Codepen",
                icon: "codepen",
            }
        })
    )
}
function githubRepoList(res = {}){

    const ranorder = Math.floor((Math.random() * 10) + 1); // seed for randomize of images

    return res.data.map((list, index) => {
        // TODO: do I want to tell what languages were used?
        if (!list.fork) {
            return {
                title: _.startCase(list.name),
                images: {
                    small:base64Images.octacats[index * ranorder % 3]
                },
                details: _.capitalize(list.description),
                link: list.html_url,
                icon: {
                    name: "Github",
                    icon: "github"
                }
            }
        } // end of check for !list.fork
        return undefined;
    }).filter(obj => {
        return obj !== undefined
    })
}


export {
    codepenList,
    githubRepoList
}