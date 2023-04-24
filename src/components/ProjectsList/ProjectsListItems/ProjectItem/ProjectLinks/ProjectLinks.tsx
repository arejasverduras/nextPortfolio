import styledJsx from './ProjectLinks.styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectLinksProps {
    links: ProjectLinksContent;
}

export interface ProjectLinksContent {
        [linkKey:string]: string,
}

export const ProjectLinks = ({links}:ProjectLinksProps) => {

    const linksKeys = Object.keys(links);

    const linksItems = linksKeys.map((link, index) => 
        <Link 
            key={index} 
            href={links[link]}
            >
                {link}
            </Link>
    )

    return (
        <>
            {linksItems}
        </>
    )
}