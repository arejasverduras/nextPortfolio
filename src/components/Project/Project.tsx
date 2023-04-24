import styledJsx from './Project.styles';
// dep
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
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
                
            </div>
        {styledJsx.styles}
        </>
    )
}
