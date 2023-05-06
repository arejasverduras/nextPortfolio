import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogDirectory = path.join(process.cwd(),'src/content/posts')

export function getAllBlogIds() {
    const fileNames = fs.readdirSync(blogDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          blog: fileName.replace(/\.md$/, '')
        }
      }
    })
  }


export const getAllBlogData = () => {
      // Get file names under /posts
    const fileNames = fs.readdirSync(blogDirectory);
    
    const allPostsData =  fileNames.map((fileName) => {
            // Remove ".md" from file name to get id        
            const blog = fileName.replace(/\.md$/,'')

            // Read markdown file as string
            const fullPath = path.join(blogDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            // Combine the data with the id
            return {
            blog,
            ...matterResult.data
            }
            }
    )

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
  })
}

export const getPostData = async (id) => {
    // return projectData.find(project => project.link === id);
    const fullPath = path.join(blogDirectory, `${id}.md`);
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
