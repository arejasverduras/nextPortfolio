import styles from '../styles/Projects.module.css';
// deps
import { AnimatePresence, motion } from "framer-motion";

// components
import PageLayout from "@/components/PageLayout/PageLayout";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const Projects: NextPageWithLayout = () => {
    return (
        <motion.div
                key="projectPage"
                className={styles.container}
                // animate={{opacity: [0,1]}}
                >
                    <motion.div
                        className={styles.sectionContent}
                        key="projectContent"
                        animate={{y: [200,0], opacity: [0,1], transition: {delay: 0.4}}}
                        exit={{y: 200, opacity: 0}}
                        >
                            <h1>Project</h1>
                            <div>bla</div>
                    </motion.div>
            </motion.div>
    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            {/* optional nested layout component */}
            {page}
        </PageLayout>
    )
}

export default Projects;