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
        <div
                key="projectPage"
                className={styles.container}
                >
                    <div
                        className={styles.sectionContent}
                        key="projectContent"
                        >
                            <h1>Project</h1>
                            <div>bla</div>
                    </div>
            </div>
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