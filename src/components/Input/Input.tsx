import styles from './Input.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface InputProps {
    visible: boolean, 
    toggleVisible: ()=>void,
    searchTerm: string,
    setSearchTerm: (term:string) => void,
    startOpen?: boolean,
}

export const Input = ({visible, toggleVisible, searchTerm, setSearchTerm, startOpen}:InputProps) => {
    const [message, setMessage] = useState(<></>);
    const [showMessage, setShowMessage] = useState(false);
    
    const router = useRouter();

    const samePageMessage = <>You are currently on this page: <span>{router.asPath.slice(1)}</span></>;
    const errormessage = <>Command <span>{searchTerm}</span> not found. <br/> Click on the `?` icon to see a list of commands</>


    const animations = {
        enter: {
            scale: [0.1,1]
        },
        exit: {
            scale: 0
        },
        slideOpen: {
            width: 200,
        },
        slideClose: {
            width: 50
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
        setSearchTerm(target.value)
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
        
        switch (searchTerm) {
            case "about":    
                router.push('/about')
                break;
            case "home":
                router.push('/')
                break;
            case "projects": 
                router.push('/projects');
                break;
            default:
            setMessage(errormessage);    
            setShowMessage(true);
                break;
        }
      }

    return (
        <motion.div 
            className={styles.inputHolder}
            key="inputHolder"
            layoutId="inputHolder"
            >
                <AnimatePresence>
                    <motion.div
                        className={styles.dot}
                        key="dot"
                        variants={animations}
                        animate="enter"
                        exit="exit"
                        onClick={toggleVisible}
                        layoutId="inputDot"
                        >
                        </motion.div>
                        </AnimatePresence>

                        {visible && (
                            <AnimatePresence>
                                <motion.div
                                    className={styles.input}
                                    key="input"
                                    variants={animations}
                                    initial={startOpen? {width: 200}: {width: 50}}
                                    animate={!startOpen && "slideOpen"}
                                    
                                    // layoutId="inputBar"
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
                                                key="inputButton"
                                                onClick={navigate}
                                                animate={{x: [40,0], opacity: [0,1]}}
                                                transition={{delay: 0.4}}
                                                >Enter <FontAwesomeIcon icon={faTurnDown}/></motion.button>
                                    </motion.div>
                                </AnimatePresence>
                        )}
                
                <AnimatePresence>
                    {showMessage && (
                        <motion.p
                            className={styles.errorMessage}    
                            key="errormessage"
                            animate={{x: [20,0], opacity: [0,1]}}
                            exit={{x: [0,-20], opacity: [1,0]}}
                            >{message}
                        </motion.p>
                    )}
                </AnimatePresence>
                
            </motion.div>
    )
}
