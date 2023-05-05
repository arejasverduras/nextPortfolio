import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';

import {projectData} from '../content/data.tsx';

const projectsDirectory = path.join(process.cwd(),'src/content/projects')


export const getAllProjectsMd = () => {
    const fileNames= fs.readdirSync(projectsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                project: fileName.replace(/\.md$/,'')
            }
        }
    })

    // return {
    //     paths: {
    //         params: {
    //             project: fileName.replace(/\.md$/,'')
    //         }
    //     },
    //     fallback: false,
    // }
}

export const getProjectMd = async (id) => {
    // return projectData.find(project => project.link === id);
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // gray-matter
    const matterResult = matter(fileContents);

    // convert markdown to html string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    

    // combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}

export async function getReadMe(url) {
    const file = await fetch(url).then((result)=> result);

    const processed =  remark()
        .use(html)
        .process(file);
    const contentHtml = processed.toString();
    return contentHtml;
}