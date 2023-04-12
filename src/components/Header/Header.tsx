import styles from './Header.module.css';
import { useState, useEffect } from 'react';
// components
import { Input } from '../Input/Input';
import { Hints } from '../Hints/Hints';
import { Message } from '../Message/Message';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
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

    // const handleDark = () => {
    //     let root = document.documentElement;
    //         root.style.setProperty('--colorBg','#292D3E');
    //         root.style.setProperty('--colorText', 'white');
    // }

    // const handleLight = () => {
    //     let root = document.documentElement;
    //         root.style.setProperty('--colorBg','white');
    //         root.style.setProperty('--colorText', '#292D3E');
    // }

    useEffect(()=>{
        let root = document.documentElement;
        if (theme === 'light'){
            root.style.setProperty('--colorBg','white');
            root.style.setProperty('--colorText', '#292D3E');
        } else if (theme === 'dark') {
            root.style.setProperty('--colorBg','#292D3E');
            root.style.setProperty('--colorText', 'white');
        } else {return}
    },[theme])

    return (
        <>
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
                <div className={styles.theme}>
                    <FontAwesomeIcon icon={faMoon} onClick={()=>{setTheme('dark')}} className={theme === 'dark'? styles.currentTheme: undefined}/>
                    <FontAwesomeIcon icon={faSun} onClick={()=>{setTheme('light')}} className={theme === 'light'? styles.currentTheme: undefined} />
                </div>
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
        </>
    )
}