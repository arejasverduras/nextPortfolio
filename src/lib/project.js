import {remark} from 'remark';
import html from 'remark-html';

import {projectData} from '../content/data.tsx';

export const getAllProjects = () => {
    const projectsArray = [];
    projectData.forEach((project, index) => {
        projectsArray.push(
            {params: {
                project: project.link
            }}
        )
    })

    return {
        paths: projectsArray,
        fallback: false,
    }
}

export const getProject = (id) => {
    return projectData.find(project => project.link === id);
}

export async function getReadMe(url) {
    const file = await fetch(url).then((result)=> result);

    const processed =  remark()
        .use(html)
        .process(file);
    const contentHtml = processed.toString();
    return contentHtml;
}