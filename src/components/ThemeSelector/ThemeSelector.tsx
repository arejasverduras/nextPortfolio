import styles from './ThemeSelector.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

interface ThemeSelectorProps {
    theme: string,
    setTheme: (theme: string)=>void,
}

export const ThemeSelector = ({theme, setTheme}:ThemeSelectorProps) => {   
    
    useEffect(()=>{
        let root = document.documentElement;
        if (theme === 'light'){
            root.style.setProperty('--colorBg','var(--lightBg)');
            root.style.setProperty('--colorText', 'var(--lightText)');
            root.style.setProperty('--colorH1', 'var(--lightH1)');
        } else if (theme === 'dark') {
            root.style.setProperty('--colorBg','#292D3E');
            root.style.setProperty('--colorText', 'var(--darkGray)');
            root.style.setProperty('--colorH1', 'var(--darkYellow)');
        } else {return}
    },[theme]);
    
    return (
        <motion.div 
        key="themeSelector"    
        className={styles.theme}
            layoutId="themeSelector"
            >
                <FontAwesomeIcon icon={faMoon} onClick={()=>{setTheme('dark')}} className={theme === 'dark'? styles.currentTheme: undefined}/>
                <FontAwesomeIcon icon={faSun} onClick={()=>{setTheme('light')}} className={theme === 'light'? styles.currentTheme: undefined} />
            </motion.div>
    )
}