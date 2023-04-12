import styles from './Message.module.css';
import { AnimatePresence, motion } from "framer-motion";

interface MessageProps {
    showMessage: boolean,
    message: any,
}

export const Message = ({showMessage, message}:MessageProps) => {
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