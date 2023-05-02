import styles from './Input.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTurnDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// components
import { InputLed } from '../InputLED/InputLED';

interface InputProps {
    visible: boolean, 
    toggleVisible: ()=>void,
    searchTerm: string,
    setSearchTerm: (term:string) => void,
    startOpen?: boolean,
    setMessage: (element: any)=>void,
    setShowMessage: (type: boolean)=>void,
    setTheme: (type:string)=>void,
    trackLayout?: boolean
}

export const Input = ({visible, toggleVisible, searchTerm, setSearchTerm, startOpen, setMessage, setShowMessage, setTheme, trackLayout}:InputProps) => {
    const [hit, setHit] = useState(false);
    const [searchHit, setSearchHit] = useState(false);
    const [action, setAction] = useState(false);
    
    const router = useRouter();

    const samePageMessage = <>You are already on this page: <span>{router.asPath.slice(1)}</span></>;
    const errormessage = <>Command <span>{searchTerm}</span> not found. <br/> Click on the `?` icon to see a list of commands</>

    const commands=["about", "projects","home","light","dark"]

    const animations = {
        enter: {
            scale: [0.1, 0.8,1],
            opacity: [0,1],
            transition: {repeat: Infinity, duration: 1.4}
        },
        enterGrow: {
            scale: [1,1.8],
            opacity: [1,0],
            transition: {repeat: Infinity, duration: 1.4}
        },
        exit: {
            scale: 4,
            opacity: 0,
            transition: {duration: 0.4}
        },
        slideOpen: {
            width: 200,
            transition: {delay: 0.2}
        },
        slideClose: {
            width: 50
        },
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

    useEffect(()=>{
        const inpute = document.getElementById("inputfield");
        console.log(inpute);
        inpute?.focus();
    
      },[visible]
      );


      const handleChange = ({target}:any) => {
        setShowMessage(false);
        setSearchTerm(target.value.toLowerCase())
      }
      
      const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
            navigate();
        }
      }

      const navigate = () => {
        console.log(router.asPath);
        if (`/${searchTerm}` === router.asPath){
            setMessage(samePageMessage);
            setShowMessage(true);
            return;
        }

        if (searchHit){
            setAction(true);
        setTimeout(() => {
            setAction(false);
        }, 200);
            return;
        }
        
        switch (searchTerm) {
            case "about":    
                router.push('/about', undefined,{shallow: false})
                setTimeout(() => {
                    setSearchTerm("");
                }, 400);
                
                break;
            case "home":
                router.push('/', undefined,{shallow: false})
                setTimeout(() => {
                    setSearchTerm("");
                }, 400);
                break;
            case "projects": 
                router.push('/projects', undefined,{shallow: false});
                setTimeout(() => {
                    setSearchTerm("");
                }, 400);
                break;
            case "light":
                setTheme('light');
                setTimeout(() => {
                    setSearchTerm("");
                }, 400);
                break;
            case "dark":
                setTheme('dark');
                setTimeout(() => {
                    setSearchTerm("");
                }, 400);
                break;
            default:
            setMessage(errormessage);    
            setShowMessage(true);
                break;
        }

        setAction(true);
        setTimeout(() => {
            setAction(false);
        }, 200);
      }

    return (
        <>
                                        
        <motion.div 
            className={styles.inputHolder}
            key="inputHolder"
            layoutId={trackLayout? "inputHolder": undefined}
            >
                
                {visible && (<div className={styles.lightHolder}>
                    <InputLed 
                                        searchTerm={searchTerm} 
                                        commands={commands}
                                        hit={hit}
                                        setHit={setHit}
                                        searchHit={searchHit}
                                        setSearchHit={setSearchHit}
                                        action={action}
                                        />
                </div>)}
                <AnimatePresence>
                    {!visible && (<motion.div
                        className={styles.dotCircle}
                        key="dot"
                        variants={animations}
                        initial={{opacity: 0}}
                        animate="enterGrow"
                        exit="exit"
                        onClick={toggleVisible}
                        layoutId="inputDot"
                        >
                    </motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {!visible && (<motion.div
                        className={styles.dot}
                        key="dot2"
                        variants={animations}
                        initial={{opacity: 0}}
                        animate="enter"
                        exit="exit"
                        onClick={toggleVisible}
                        layoutId="inputDotGrow"
                        >
                            <FontAwesomeIcon icon={faPowerOff} />
                    </motion.div>)}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                        {visible && (
                                <motion.div
                                    className={styles.input}
                                    key="input"
                                    variants={animations}
                                    initial={startOpen? {width: 200}: {width: 50}}
                                    animate={!startOpen && "slideOpen"}
                                    >
                                        <div
                                            >{'>'} </div>
                                        <input 
                                            id="inputfield"
                                            key="inputfield"
                                            placeholder="about"
                                            className={styles.inputField}
                                            value={searchTerm}
                                            onChange={handleChange}
                                            onKeyDown={handleKeyDown}
                                            />
                                            <motion.button 
                                                type="submit"
                                                key={"inputButton"}
                                                onClick={navigate}
                                                style={!hit ? searchHit ? {backgroundColor: "var(--colorH3", color: "var(--colorCommands)"}:{backgroundColor: "var(--colorCommands)" }:   {backgroundColor: "var(--lightBloen1)", color: "var(--lightGray)"}}
                                                animate={hit ? {scale: [1,1,1], opacity: 1, x: 0, transition: {delay: 0, duration: 0.8, repeat: Infinity}}:{x: [40,0], opacity: [0,1]}}
                                                transition={{delay: 0.4}}
                                                >Enter <FontAwesomeIcon icon={faTurnDown}/></motion.button>
                                    </motion.div>
                        )}
                        </AnimatePresence>               
            </motion.div>
            </>
    )
}
