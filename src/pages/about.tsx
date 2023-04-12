import styles from '../styles/About.module.css';
// deps
import { AnimatePresence, motion } from "framer-motion";

// components
import PageLayout from "@/components/PageLayout/PageLayout";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const About: NextPageWithLayout = () => {
    return (
        <div
        key="aboutpage"        
        className={styles.container}
                >
                    <div
                        className={styles.sectionContent}
                        key="aboutContent"
                        // animate={{y: [200,0], opacity: [0,1], transition: {delay: 0.4}}}
                        // exit={{y: 200, opacity: 0}}
                        >
                            <h1>About</h1>
                            <div>bla</div>
                    </div>
            </div>
    )
}

About.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            {/* optional nested layout component */}
            {page}
        </PageLayout>
    )
}

export default About;