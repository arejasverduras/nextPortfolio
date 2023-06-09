import styledJsx from './inputLED.styles';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InputLedProps {
    searchTerm: string,
    commands: string[],
    hit: boolean,
    setHit: (hit: boolean)=> void,
    searchHit: boolean,
    setSearchHit: (search: boolean) => void,
    action: boolean,
}

export const InputLed = ({searchTerm, commands, hit, setHit, searchHit, setSearchHit, action}:InputLedProps) => {
    
    useEffect(()=>{
        setHit(commands.some((command) => command === searchTerm));
        setSearchHit(searchTerm.includes('search'));
    },[searchTerm, commands])

    const animations = {
        regular: {
            filter: ['brightness(50%)','brightness(110%)','brightness(50%)'],
            transition: {duration: 1.5, repeat: Infinity}
        },
        hit: {
            filter: ['brightness(80%)','brightness(150%)','brightness(80%)'],
            transition: {duration: 0.4, repeat: Infinity}
        },
        action: {
            filter: ['brightness(100%)','brightness(150%)'],
            scale: [1,3.5, 4],
            opacity: [1,1,0],
            transition: {duration: 0.2}
        }
    }

    return (
        <motion.div
            key="lightHolder"
            animate={{opacity: [0,1], transition: {delay: 1.6}}}
            className={`${styledJsx.className} container`}
            
            >
            <div
                className={`${styledJsx.className} firstCircle`} 
                style={action ? {opacity: 0}: {}} 
                >
            </div>
            <motion.div
                className={`${styledJsx.className} secondCircle`} 
                style={action && searchHit? {background: "radial-gradient(var(--colorH3), transparent)"}: action && hit ? {background: "radial-gradient(var(--lightBloen1), transparent)"}:action? {background: "radial-gradient(var(--colorCommands), transparent)"}: !hit ? searchHit ? {backgroundColor: "var(--colorH3"}:{backgroundColor: "var(--colorCommands)" }:   {backgroundColor: "var(--lightBloen1)"}}
                key="searchLight"
                variants={animations}
                animate={action? "action": hit || searchHit? "hit": "regular"}
                >
            </motion.div>
            <div
                className={`${styledJsx.className} thirdCircle`} 
                >
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}