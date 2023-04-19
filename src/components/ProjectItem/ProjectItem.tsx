import styledJsx from './ProjectItem.styles';
// dependencies
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectItemProps {
    content: {
        title: string,
        picture: string,
        description: string,
        link: string,
        tech: string[],
        type?: string,
    },
    index: number,
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

export const ProjectItem = ({index, content}:ProjectItemProps) =>{
    const {title, picture, description, link, tech, type} = content;

    return (
        <AnimatePresence>         
                <motion.div 
                    className={`${styledJsx.className} container`}
                    key={index+title}
                    variants={animations}
                    animate="itemsPop"
                    exit={{x: -500, opacity: 0}}
                    custom={((index + 1) * 0.15)+0.4}
                    layoutId={index+title}
                    layout
                    >
                    <Link href={'projects/'+link} className={`${styledJsx.className} content`}>
                        <div className={`${styledJsx.className} logo`} >
                            <Image src={picture} alt='projectLogo' width='200' height='200' className={`${styledJsx.className} logoImage`}/>
                        </div>
                        <div className={`${styledJsx.className} textContent`}>
                            <h2>{title}</h2>
                            <i className={`${styledJsx.className} type`}>{type}</i>
                            <p className={`${styledJsx.className} description`}>{description}</p>
                            
                            <div className={`${styledJsx.className} techHolder`}>
                                {/* <h3>tech:</h3> */}
                                
                                <p>
                                {tech && 
                                    tech.map((item, index) => <b key={index}>{item} </b>)    
                                }
                                </p>
                            </div>
                            
                        </div>
                    </Link>
                </motion.div>
                {styledJsx.styles}          
        </AnimatePresence>
    )
 }