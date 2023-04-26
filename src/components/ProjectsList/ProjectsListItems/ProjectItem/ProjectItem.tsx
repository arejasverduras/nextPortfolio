import styledJsx from './ProjectItem.styles';
// dependencies
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
// components
import { ProjectLinks } from './ProjectLinks/ProjectLinks';
// types
import { ProjectContent } from '@/components/Project/Project';

export interface ProjectItemProps {
    content: ProjectContent,
    index?: number,
    onPage?:boolean,
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

export const ProjectItem = ({index=0 , content, onPage}:ProjectItemProps) =>{
    const {title, picture, description, shortText, link, links, tech, type, images} = content;

    return (
        <AnimatePresence>         
                <motion.div 
                    className={`${styledJsx.className} container ${onPage && "onPageContainer"}`}
                    key={link}
                    variants={animations}
                    animate={onPage? undefined: "itemsPop"}
                    // exit={{x: -500, opacity:0}}
                    custom={((index + 1) * 0.15)+0.4}
                    layoutId={link}
                    layout
                    >
                    <Link 
                        href={onPage? link: 'projects/'+link} 
                        className={`${styledJsx.className} content ${onPage && "onPageContent"}`}
                        // scroll={false}
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
                        {onPage && (
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