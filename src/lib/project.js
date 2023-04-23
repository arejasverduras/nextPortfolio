
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