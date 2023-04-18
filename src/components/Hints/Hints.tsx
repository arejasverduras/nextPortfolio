import styles from './Hints.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

interface HintsProps {
    setSearchTerm: (term:string) => void;
    setShowMessage: (type: boolean) => void;
    home?: boolean,
}

export const Hints = ({setSearchTerm, setShowMessage, home}:HintsProps) => {
    const [hints, setHints] = useState(false);
    const toggleHints = () => {
        setHints(!hints);
        setShowMessage(false);
      }
    
    const animations = {
        hintsEnter: {
            opacity: [0,1],
            y: [-20,0],
            transition: {delay: 0.4}
        },
        hintsExit: {
            opacity: [1,0],
            y: [0,-20]
        },
        hintsRotate: {
            rotate: [0,90]
        }, 
        hintsRotateBack: {
            rotate: 0
        }
    }

    const handleClick = (term:string) => {
        setSearchTerm(term);
        setShowMessage(false);
    }

    const hintsList = ['home','about','projects'];

    const generateLinks = (list: string[]) => {
        return list.map((item, index) => 
            <Link 
                key={index} 
                className={styles.hintLink}
                href={`/${item === 'home'? '': item}`} 
                onClick={toggleHints}>
                    {`>`} {item}
                </Link>
        )
    }
    
    return (

            <motion.div 
                className={`${styles.hintsHolder} ${home && styles.hintsHolderHome}`} 
                onClick={toggleHints}
                key="hintsHolderHints"
                layout
                // layoutId="hintsHolder"
                >
                <motion.div
                    className={`${styles.hintsArrow} ${ hints && styles.hintsArrowVisible}`}
                    key="hintsArrow"
                    variants={animations}
                    initial={{rotate:0}}
                    animate={hints? "hintsRotate": "hintsRotateBack"}
                    onClick={!hints?()=>setShowMessage(false):undefined}
                    layout
                    >
                        <FontAwesomeIcon icon={faQuestion}/>
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {hints && (
                            <motion.ul 
                                key="hintsList"
                                className={styles.hintsList}
                                // layout
                                variants={animations}
                                animate="hintsEnter"
                                exit="hintsExit"
                                >
                                    <p><b>Navigate</b> by typing any of these commands in the input bar and pressing Enter:</p>
                                    <div className={styles.hintsListHolder}>
                                        {generateLinks(hintsList)}
                                    </div>
                                    <p><b>Search</b> anything by starting your command with <i>search </i></p>
                                    {!home && (
                                    <>
                                        <p>Change <b>color</b> theme:</p>
                                        <ul>
                                            <li onClick={()=>handleClick("dark")}>dark</li>
                                            <li onClick={()=>handleClick("light")}>light</li>
                                        </ul>
                                    </>
                                    )}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </motion.div>
    )
}