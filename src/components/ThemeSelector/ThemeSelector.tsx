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
            root.style.setProperty('--colorHeaderBg','var(--lightHeaderBg)');
            root.style.setProperty('--colorInputBg','var(--lightInputBg)');
            root.style.setProperty('--colorText', 'var(--lightText)');
            root.style.setProperty('--colorH1', 'var(--lightH1)');
            root.style.setProperty('--colorBorders', 'var(--lightBorders)');
            root.style.setProperty('--colorInputBorders', 'var(--lightInputBorders)');
            root.style.setProperty('--colorCommands', 'var(--lightCommands)');
            root.style.setProperty('--colorEnterRed', 'var(--lightEnterRed)');
            root.style.setProperty('--colorBolds', 'var(--lightBolds)');
            root.style.setProperty('--colorItalics', 'var(--lightItalics)');
        } else if (theme === 'dark') {
            root.style.setProperty('--colorBg','var(--darkBg)');
            root.style.setProperty('--colorHeaderBg','var(--darkHeaderBg)');
            root.style.setProperty('--colorInputBg','var(--darkInputBg)');
            root.style.setProperty('--colorText', 'var(--darkText)');
            root.style.setProperty('--colorH1', 'var(--darkH1)');
            root.style.setProperty('--colorBorders', 'var(--darkBorders)');
            root.style.setProperty('--colorInputBorders', 'var(--darkInputBorders)');
            root.style.setProperty('--colorCommands', 'var(--darkCommands)');
            root.style.setProperty('--colorEnterRed', 'var(--darkEnterRed)');
            root.style.setProperty('--colorBolds', 'var(--darkBolds)');
            root.style.setProperty('--colorItalics', 'var(--darkItalics)');
        } else {return}
    },[theme]);
    
    return (
        <motion.div 
        key="themeSelector"    
        className={styles.theme}
            layoutId="themeSelector"
            >
                <FontAwesomeIcon 
                    icon={faMoon} 
                    onClick={()=>{setTheme('dark')}} 
                    className={theme === 'dark'? styles.currentTheme: styles.inActiveTheme}
                    />
                <FontAwesomeIcon 
                    icon={faSun} 
                    onClick={()=>{setTheme('light')}} 
                    className={theme === 'light'? styles.currentTheme: styles.inActiveTheme}
                    />
            </motion.div>
    )
}