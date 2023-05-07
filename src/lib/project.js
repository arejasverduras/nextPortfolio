import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import {projectData} from '../content/data.tsx';


const projectsDirectory = path.join(process.cwd(),'src/content/projects')

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

export const getAllProjectsData = () => {
    // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData =  fileNames.map((fileName) => {
          // Remove ".md" from file name to get id        
          const project = fileName.replace(/\.md$/,'')

          // Read markdown file as string
          const fullPath = path.join(projectsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')

          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents)

          // Combine the data with the id
          return {
          project,
          ...matterResult.data
          }
          }
  )

  // Sort projects by date
  return allProjectsData.sort((a, b) => {
      if (a.launchDate < b.launchDate) {
          return 1
      } else {
          return -1
      }
})
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