import styles from './PageLayout.module.css';
// components
import { Header } from '../../components/Header/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function PageLayout({children}:any) {
    const router = useRouter();

    const animations = {
        pageIn: {
            x: [600,0],
            opacity: [0,1],
        },
        pageOut: {
            x: -600,
            opacity: 0,
        }
    }
    
    return (
        <div className={styles.container}>
            <Header />
            <AnimatePresence mode="wait" initial={false}>
                <motion.main
                    variants={animations}
                    key={router.asPath}
                    animate="pageIn"
                    exit="pageOut"
                    transition={{duration: 0.8}}
                    >
                        {children}
                </motion.main>
            </AnimatePresence>
        </div>
    )
}
