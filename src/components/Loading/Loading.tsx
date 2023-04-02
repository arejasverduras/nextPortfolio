import styles from './Loading.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';

export const Loading = () => {
    const animations = {
        pulse: {
            opacity: [0,1],
            // scale: [0.9, 1],
            rotate: 180,
            transition: {ease: "easeInOut", duration: 0.8, repeat: Infinity}
        }
    }
    
    return (
             <motion.div
                className={styles.dot}
                key="dot"
                variants={animations}
                animate="pulse"
                layoutId="loadingDot"
                >
                    <FontAwesomeIcon icon={faHourglass}/>
            </motion.div>
    )
}