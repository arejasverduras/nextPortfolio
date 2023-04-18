import styles from './PageLayout.module.css';
// dependencies
import Head from 'next/head';
// components
import { Header } from '../../components/Header/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface PageLayoutProps {
    home?:boolean,
    children: any,
}

export default function PageLayout({children, home}:PageLayoutProps) {
    const router = useRouter();
    console.log(router.asPath);
    const isHome = router.asPath === '/';

    const animations = {
        pageIn: {
            x: [600,0],
            opacity: [0,1],
            rotate: [35,0],
            scale: [0.1,1]
        },
        pageOut: {
            x: -600,
            opacity: 0,
            rotate: -35,
            scale: 0.1
        },
        pageOutHome: {
            x: -600,
            opacity: 0
        }
    }
    
    return (
        <div className={styles.container}>
            <Head>
                <meta name="theme-color" content="var(--colorHeaderBg)" />
                <meta name="apple-mobile-web-app-status-bar" content="var(--colorHeaderBg)" />
            </Head>
            <Header home={home} />
            <AnimatePresence mode="wait" initial={false}>
                <motion.main
                    variants={animations}
                    key={router.asPath}
                    initial={{x: 600, opacity: 0}}
                    animate="pageIn"
                    exit={isHome? "pageOutHome": "pageOut"}
                    transition={{duration: 0.4}}
                    >
                        {children}
                </motion.main>
            </AnimatePresence>
        </div>
    )
}
