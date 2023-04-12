import styles from './Hints.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

interface HintsProps {
    visible: boolean,
    setSearchTerm: (term:string) => void;
    setShowMessage: (type: boolean) => void;
}

export const Hints = ({visible, setSearchTerm, setShowMessage}:HintsProps) => {
    const [hints, setHints] = useState(false);
    const toggleHints = () => {
        setHints(!hints);
      }
    
    const animations = {
        hintsEnter: {
            opacity: [0,1],
            y: [-20,0]
        },
        hintsExit: {
            opacity: [1,0],
            y: [0,-20]
        },
        hintsRotate: {
            rotate: [0,90]
        }
    }

    const hintsList = ['home','about','projects'];

    const generateLinks = (list: string[]) => {
        return list.map((item, index) => 
            // <li key="index" onClick={()=>{
            //     setSearchTerm(item);
            //     setShowMessage(false);
            
            // }}>{item}</li>
            <Link key={index} href={`/${item}`}>-{item}</Link>
        )
    }
    
    return (
        <AnimatePresence>        
            {visible && (
                        <motion.div 
                            className={styles.hintsHolder} 
                            onClick={toggleHints}
                            key="hintsHolder"
                            animate={{opacity: [0,1], y: [20,0]}}
                            transition={{delay: 1.2}}
                            // layoutId="hintsHolder"
                            >
                            <motion.div
                                className={styles.hintsArrow}
                                key="hintsArrow"
                                variants={animations}
                                initial={{rotate:0}}
                                animate={hints? "hintsRotate": "hintsRotateBack"}
                                layout
                                >
                                    <FontAwesomeIcon icon={faQuestion}/>
                                </motion.div>
                            </motion.div>)}
                    {hints && (
                    <>
                    <motion.ul 
                        key="hintsList"
                        className={styles.hintsList}
                        layout
                        variants={animations}
                        animate="hintsEnter"
                        exit="hintsExit"
                        >
                            {generateLinks(hintsList)}
                    </motion.ul>
                    </>)}
                </AnimatePresence>
    )
}