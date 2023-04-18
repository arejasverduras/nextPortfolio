import styles from './Header.module.css';
import { useState } from 'react';
// components
import { Input } from '../Input/Input';
import { Hints } from '../Hints/Hints';
import { Message } from '../Message/Message';
import { ThemeSelector } from '../ThemeSelector/ThemeSelector';
import { motion } from 'framer-motion';

export const Header = ({home}:any) => {
    const [visible, setVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState(<></>);
    const [showMessage, setShowMessage] = useState(false);
    const [theme, setTheme] = useState('light');
    
    const animations = {
        topIn: {
            y: [-50,0],
        },
        rightIn: {
            x: [200,0]
        },
    }
 
    return (
        <>
            <motion.div 
            className={`${styles.header} ${home && styles.headerHome}`}
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
                {!home && (
                    <>
                        <motion.div className={styles.commandHolder}>
                            <Input 
                                startOpen
                                visible={visible}
                                toggleVisible={()=>{setVisible(!visible)}}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                setMessage={setMessage}
                                setShowMessage={setShowMessage}
                                setTheme={setTheme}
                                />
                        </motion.div>
                        <Message 
                            message={message}
                            showMessage={showMessage}
                            />
                    </>
                    )}
                <ThemeSelector theme={theme} setTheme={setTheme}/>
                
                {!home && (<motion.div 
                    className={styles.hintsHolder}
                    key="hintsHolderLayout"
                    variants={animations}
                    animate="rightIn"
                    >
                    <Hints
                        setSearchTerm={setSearchTerm}
                        setShowMessage={setShowMessage}
                        />
                </motion.div>)}
            </div>
        </>
    )
}