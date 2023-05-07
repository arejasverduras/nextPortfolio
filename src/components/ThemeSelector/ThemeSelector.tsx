import styles from './ThemeSelector.module.css';
import { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from '@/context/ThemeContext';

interface ThemeSelectorProps {
    // theme: string,
    // setTheme: (theme: string)=>void,
}

export const ThemeSelector = ({}:ThemeSelectorProps) => {   
    const {theme, setTheme} = useContext(ThemeContext);

    useEffect(()=>{
        let root = document.documentElement;
        if (theme === 'light'){
            root.style.setProperty('--colorBg','var(--lightBg)');
            root.style.setProperty('--colorHeaderBg','var(--lightHeaderBg)');
            root.style.setProperty('--colorInputBg','var(--lightInputBg)');
            root.style.setProperty('--colorText', 'var(--lightText)');
            root.style.setProperty('--colorH1', 'var(--lightH1)');
            root.style.setProperty('--colorH2', 'var(--lightH2)');
            root.style.setProperty('--colorH3', 'var(--lightH3)');
            root.style.setProperty('--colorA', 'var(--lightA)');
            root.style.setProperty('--colorBorders', 'var(--lightBorders)');
            root.style.setProperty('--colorInputBorders', 'var(--lightInputBorders)');
            root.style.setProperty('--colorCommands', 'var(--lightCommands)');
            root.style.setProperty('--colorEnterRed', 'var(--lightEnterRed)');
            root.style.setProperty('--colorBolds', 'var(--lightBolds)');
            root.style.setProperty('--colorItalics', 'var(--lightItalics)');
            root.style.setProperty('--colorSelection', 'var(--lightSelection)');

            root.style.setProperty('--currentHeaderBg', 'var(--lightHeaderBg)');
            root.style.setProperty('--currentBg', 'var(--lightBg)');
            root.style.setProperty('--currentText', 'var(--lightText)');

        } else if (theme === 'dark') {
            root.style.setProperty('--colorBg','var(--darkBg)');
            root.style.setProperty('--colorHeaderBg','var(--darkHeaderBg)');
            root.style.setProperty('--colorInputBg','var(--darkInputBg)');
            root.style.setProperty('--colorText', 'var(--darkText)');
            root.style.setProperty('--colorH1', 'var(--darkH1)');
            root.style.setProperty('--colorH2', 'var(--darkH2)');
            root.style.setProperty('--colorH3', 'var(--darkH3)');
            root.style.setProperty('--colorA', 'var(--darkA)');
            root.style.setProperty('--colorBorders', 'var(--darkBorders)');
            root.style.setProperty('--colorInputBorders', 'var(--darkInputBorders)');
            root.style.setProperty('--colorCommands', 'var(--darkCommands)');
            root.style.setProperty('--colorEnterRed', 'var(--darkEnterRed)');
            root.style.setProperty('--colorBolds', 'var(--darkBolds)');
            root.style.setProperty('--colorItalics', 'var(--darkItalics)');
            root.style.setProperty('--colorSelection', 'var(--darkSelection)');

            root.style.setProperty('--currentHeaderBg', 'var(--darkHeaderBg)');
            root.style.setProperty('--currentBg', 'var(--darkBg)');
            root.style.setProperty('--currentText', 'var(--darkText)');
        } else {return}
    },[theme, setTheme]);
    
    return (
        <motion.div 
        key="themeSelector"    
        className={styles.theme}
            // layoutId="themeSelector"
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