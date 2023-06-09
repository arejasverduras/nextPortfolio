import styledJsx from './Project.styles';
// dep


// types
import { ProjectLinksContent } from '../ProjectsList/ProjectsListItems/ProjectItem/ProjectLinks/ProjectLinks';

interface ProjectProps {
    content:any,
}

export interface ProjectContent {
    title: string,
    picture: string,
    description: string,
    shortText: string,
    link: string,
    type: string,
    tech: string[],
    images: string[],
    links: ProjectLinksContent,
    themeColor?: string,
    themeTextColor?: string,
}

export const Project = ({content}:ProjectProps) => {
    const {title, picture, description, shortText, link, type, tech, images, demoLink, sourceLink, readMe, themeColor, themeTextColor} = content;
    
    return (
        <>
            <div className={`${styledJsx.className} container`}>
                {/* collaborators */}
                {/* images */}
            </div>
        {styledJsx.styles}
        </>
    )
}
