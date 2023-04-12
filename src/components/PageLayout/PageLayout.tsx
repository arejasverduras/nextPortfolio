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
    
    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.header}
                key="PageLayoutHeader"
                animate={{y: [-200,0]}}
                transition={{delay: 0.2, ease: 'anticipate' }}
                >
                <div className={styles.logo}>
                    Michiel Roukens
                </div>
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
                key="hintsHolder"
                layout
                >
                <Hints 
                    visible={true}
                    setSearchTerm={setSearchTerm}
                    setShowMessage={setShowMessage}
                    />
            </motion.div>
            <main>
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </main>
        </div>
    )
}
