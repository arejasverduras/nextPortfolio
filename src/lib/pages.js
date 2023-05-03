import { remark } from "remark";
import html from 'remark-html';
import matter from "gray-matter";
import fs from 'fs';
import path from "path";

const postsDirectory = path.join(process.cwd(),'src/content/pages')

export async function getPageData(pageName){
    const fullPath = path.join(postsDirectory, `${pageName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      pageName,
      contentHtml,
      ...matterResult.data,
    };
}