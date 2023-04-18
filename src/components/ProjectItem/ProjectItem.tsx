import styles from './ProjectItem.module.css';
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
    const {title, picture, description, link} = content;

    return (
        <AnimatePresence>         
                <motion.div 
                    className={styles.container}
                    variants={animations}
                    animate="itemsPop"
                    custom={((index + 1) * 0.15)+0.4}
                    >
                    <Link href={'projects/'+link} className={styles.content}>
                        <div className={styles.logo} >
                            <Image src={picture} alt='projectLogo' width='200' height='200'/>
                        </div>
                        <div className={styles.textContent}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </Link>
                </motion.div>          
        </AnimatePresence>
    )
 }