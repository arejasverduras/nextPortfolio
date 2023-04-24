import styles from './PageLayout.module.css';
// dependencies
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// components
import { Header } from '../../components/Header/Header';
import { AnimatePresence, motion } from 'framer-motion';


interface PageLayoutProps {
    home?:boolean,
    children: any,
}

export default function PageLayout({children, home}:PageLayoutProps) {
    const router = useRouter();
    const [isHome, setIsHome] = useState(router.asPath === '/');
    const [isProjects, setIsProjects] = useState(router.asPath === '/projects');
    const [isSubProjects, setIsSubProjects] = useState(false);

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
        },
        pageInProjects: {
            // scale: [0.7,1],
            // rotate: [10,0]
            opacity: [0.4,1]
        },
        pageOutProjects: {
            // scale: 3,
            // rotate: 10,
            opacity: 0.4,
        }
    }

    useEffect(()=>{
        setIsHome(router.asPath === '/');
        setIsProjects(router.asPath === '/projects');
        setIsSubProjects(router.asPath.includes('/projects/'));
    },[router.asPath])

    
    return (
        <div className={styles.container}>
            <Head>
                <meta name="theme-color" content="var(--colorHeaderBg)" />
                <meta name="apple-mobile-web-app-status-bar" content="var(--colorHeaderBg)" />
            </Head>
            <Header home={home} projects={isSubProjects || isProjects} />
            <AnimatePresence mode="wait" initial={false}>
                <motion.main
                    variants={animations}
                    key={router.asPath}
                    initial={isSubProjects? "":{x: 600, opacity: 0}}
                    animate={isSubProjects? "pageInProjects":"pageIn"}
                    exit={isHome? "pageOutHome": isProjects? "pageOutProjects" :"pageOut"}
                    transition={{duration: 0.4}}
                    >
                        {children}
                </motion.main>
            </AnimatePresence>
        </div>
    )
}
