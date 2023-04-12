import styles from './PageLayout.module.css';
// deps
import { useState } from 'react';
// components
import { Input } from '../Input/Input';
import { Hints } from '../Hints/Hints';
import { Message } from '../Message/Message';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageLayout({children}:any) {
    const [visible, setVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState(<></>);
    const [showMessage, setShowMessage] = useState(false);

    const animations = {
        topIn: {
            y: [-50,0],
        },
        rightIn: {
            x: [200,0]
        },
        pageIn: {
            x: [300,0],
            opacity: [0,1]
        },
        pageOut: {
            y: [100],
            opacity: 0,
        }
    }
    
    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.header}
                key="PageLayoutHeader"
                animate={{y: [-200,0]}}
                transition={{delay: 0.2, ease: 'anticipate' }}
                >
                
            </motion.div>
            <div className={styles.elementsHolder}>
                <motion.div 
                    className={styles.logo}
                    key="headerLogo"
                    variants={animations}
                    animate="topIn"
                    transition={{delay: 0.4}}
                    >
                    Michiel Roukens
                </motion.div>
                <motion.div className={styles.commandHolder}>
                    <Input 
                        startOpen
                        visible={visible}
                        toggleVisible={()=>{setVisible(!visible)}}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        setMessage={setMessage}
                        setShowMessage={setShowMessage}
                        />
                </motion.div>
                <Message 
                    message={message}
                    showMessage={showMessage}
                    />
                <motion.div 
                    className={styles.hintsHolder}
                    key="hintsHolderLayout"
                    variants={animations}
                    animate="rightIn"
                    
                    >
                    <Hints 
                        visible={true}
                        setSearchTerm={setSearchTerm}
                        setShowMessage={setShowMessage}
                        />
                </motion.div>
            </div>
            <motion.main
                variants={animations}
                key="pageLayoutMain"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: [300,0], opacity: 1 }}
                exit={{ x: [0, 300], opacity: 0 }}
                transition={{duration: 0.2}}
                >
                {/* <AnimatePresence mode="wait"> */}
                    {children}
                {/* </AnimatePresence> */}
            </motion.main>
        </div>
    )
}
