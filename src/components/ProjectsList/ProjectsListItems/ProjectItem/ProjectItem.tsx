import styledJsx from './ProjectItem.styles';
// dependencies
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
// components
import { ProjectLinks } from './ProjectLinks/ProjectLinks';
// types
import { ProjectLinksContent } from './ProjectLinks/ProjectLinks';

export interface ProjectItemProps {
    content: ProjectContent,
    index?: number,
    onPage?:boolean,
    prefix: string,
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

const animations = {
        itemsPop: (custom:any) => ({
        y: [200,0],
        opacity: [0,1], 
        transition: {delay: custom}
    }),
    itemsOut: (custom:any) => ({
        x: [-200,0],
        opacity: [1,0], 
        transition: {delay: custom}
    }),
}

export const ProjectItem = ({index=0 , content, onPage, prefix}:ProjectItemProps) =>{
    const {title, picture, description, link, links, tech, type} = content;

    return (
        <AnimatePresence>         
                <motion.div 
                    className={`${styledJsx.className} container ${onPage && "onPageContainer"}`}
                    key={title+link}
                    variants={animations}
                    initial={{x: 0, y: 0}}
                    animate={onPage? undefined: "itemsPop"}
                    // exit="itemsOut"
                    custom={((index + 1) * 0.15)+0.4}
                    layoutId={link}
                    layout
                    >
                    <Link 
                        href={onPage? link: `${prefix}/${link}`} 
                        className={`${styledJsx.className} content ${onPage && "onPageContent"}`}
                        scroll={false}
                        >
                        <motion.div 
                            className={`${styledJsx.className} ${onPage? "onPageLogo": "logo"}`} 
                            key={link+"logo"}
                            layoutId={link+"logoId"}
                            >
                            <Image src={picture} alt='projectLogo' width='200' height='200' className={`${styledJsx.className} ${onPage? "logoImage": "logoImage"}`}/>
                        </motion.div>
                        <motion.div 
                            className={`${styledJsx.className} textContent ${onPage && "onPageTextContent"}`}
                            key={link+"textContent"}
                            layoutId={link+"textContentId"}
                            >
                            <h2>{title}</h2>
                            <i className={`${styledJsx.className} type ${onPage? "onPageType": "type"}`}>{type}</i>
                            <p className={`${styledJsx.className} description ${onPage && "onPageDescription"}`}>{description}</p>
                            
                            <div className={`${styledJsx.className} techHolder ${onPage && "onPageTechHolder"}`}>
                                <p>
                                {tech && 
                                    tech.map((item, index) => <b key={index}>{item} </b>)    
                                }
                                </p>
                            </div>
                            
                        </motion.div>
                    </Link>
                        {onPage && links && (
                            <>
                                <div className={`${styledJsx.className} projectLinks`}>
                                    <ProjectLinks links={links}/>
                                </div>
                            </>
                        )}
                </motion.div>
                {styledJsx.styles}          
        </AnimatePresence>
    )
 }