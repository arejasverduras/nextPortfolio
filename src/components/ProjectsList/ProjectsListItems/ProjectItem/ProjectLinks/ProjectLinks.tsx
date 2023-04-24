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
    const animations = {
        linksSlide: (custom:any) => ({
            x: [-50,0],
            opacity: [0,1],
            transition: {delay:custom, type: "easeIn"}
        })
    }

    const linksItems = Object.keys(links).map((linkKey, index) => 
        <motion.div 
            key={linkKey+index}
            variants={animations}
            animate="linksSlide"
            custom={((index + 1) * 0.15)+0.2}
            >
            <Link 
                href={links[linkKey]}
                className={`${styledJsx.className} link`}
                target="_blank"               
                >
                    {linkKey === 'demoLink'? "Live demo": linkKey === 'sourceLink'? "Github repo": "Readme" }
            </Link>
        </motion.div>
    )
 
    return (
        <>
            <motion.div
                key="linksItemsList"
                className={`${styledJsx.className} linksList`}
            >
                {linksItems}
            </motion.div>
            {styledJsx.styles}
        </>
    )
}