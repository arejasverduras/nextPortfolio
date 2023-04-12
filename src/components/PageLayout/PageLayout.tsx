import styles from './PageLayout.module.css';
// components
import { Header } from '../Header/Header';
import { motion } from 'framer-motion';

export default function PageLayout({children}:any) {

    const animations = {

        pageIn: {
            x: [300,0],
            opacity: [0,1]
        },
        pageOut: {
            y: [100],
            opacity: 0,
        }
    }
    
    return (
        <div className={styles.container}>
            <Header />
            <motion.main
                // variants={animations}
                // key="pageLayoutMain"
                animate={{ x: [300,0], opacity: 1 }}
                exit={{ x: [0, 300], opacity: 0 }}
                transition={{duration: 0.4}}
                >
                    {children}
            </motion.main>
        </div>
    )
}
