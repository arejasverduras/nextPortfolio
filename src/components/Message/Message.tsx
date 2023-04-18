import styles from './Message.module.css';
import { useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";

interface MessageProps {
    setShowMessage: (show:boolean)=>void,
    showMessage: boolean,
    message: any,
}

export const Message = ({setShowMessage, showMessage, message}:MessageProps) => {
    const animations = {
        revealMessage: {
            x: [20,0], 
            rotate: -10, 
            opacity: [0,1]
        },
        hideMessage: {
            x: -20,
            y: 15,
            rotate: -15,
            opacity: 0,
        }
    }
    
    const handleClick = () => {
            if (showMessage) {
                setShowMessage(false);
                document.removeEventListener('click', handleClick);
            };    

    }

    useEffect(()=>{
        if (showMessage)
        setTimeout(() => {
            document.addEventListener('click', handleClick);
            return ()=>{
                document.removeEventListener('click', handleClick);
            }
        }, 50);
    },[showMessage])

    return (
        <AnimatePresence>
            {showMessage && (
                <motion.p
                    className={styles.errorMessage}    
                    key="errormessage"
                    variants={animations}
                    animate="revealMessage"
                    exit="hideMessage"
                    >{message}
                </motion.p>
            )}
        </AnimatePresence>
    )
}