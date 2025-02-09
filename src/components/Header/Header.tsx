import styles from './Header.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
// components
import { Input } from '../Input/Input';
import { Hints } from '../Hints/Hints';
import { Message } from '../Message/Message';
import { ThemeSelector } from '../ThemeSelector/ThemeSelector';


export const Header = ({home, projects}:any) => {
    const [visible, setVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState(<></>);
    const [showMessage, setShowMessage] = useState(false);
    const [hints, setHints] = useState(false);

    const animations = {
        topIn: {
            y: [-50,0],
        },
        rightIn: {
            x: [200,0]
        },
        hover: {
            color: "white"
        }
    }

    const router = useRouter();

    const navigateHome = () => {
        router.push('/'), undefined, {shallow: false}
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
            <div className={styles.elementsHolder}
                key="elementsHolder">
                <motion.div 
                    className={styles.logo}
                    key="headerLogo"
                    variants={animations}
                    animate= "topIn"
                    whileHover="hover"
                    transition={{delay: 0.4}}
                    onClick={navigateHome}
                    >
                         Michiel Roukens
                </motion.div>
                {!home && (
                    <>
                   
                        <motion.div 
                            className={styles.commandHolder}
                            key="headerCommandHolder"
                            >
                            <Input 
                                startOpen
                                visible={visible}
                                toggleVisible={()=>{setVisible(!visible)}}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                setMessage={setMessage}
                                setShowMessage={setShowMessage}                           
                                trackLayout={!projects}
                                hints={hints}
                                setHints={setHints}
                                />
                        </motion.div>
                     
                        <Message 
                            setShowMessage={setShowMessage}
                            message={message}
                            showMessage={showMessage}
                            />
                    </>
                    )}
              
                    <ThemeSelector/>
                  
                {!home && (<motion.div 
                    className={styles.hintsHolder}
                    key="hintsHolderLayout"
                    variants={animations}
                    animate="rightIn"
                    // layout
                    >
                    <Hints
                        hints={hints}
                        setHints={setHints}
                        setSearchTerm={setSearchTerm}
                        setShowMessage={setShowMessage}
                        />
                </motion.div>)}
            </div>
     
            </>
    )
}