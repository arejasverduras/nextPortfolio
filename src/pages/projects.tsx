import styledJsx from '@/styles/Projects.styles';
// dependencies
import { AnimatePresence, motion } from "framer-motion";
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from "@/components/ProjectItem/ProjectItem";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import { projectData } from "@/content/data";

const Projects: NextPageWithLayout = () => {
    const listItems = projectData.map((item, index) => 
        <ProjectItem 
            content={item} 
            key={index}
            index={index}
            />
    )

    return (
        <>
            <h1>Projects</h1>
            <motion.div
                key="projectListItems"
                animate={{opacity: [0,1], transition: {delay: 0.4}}}
                className={`${styledJsx.className} listItems`}
                >
                    {listItems}
                </motion.div>
            <h2>header 2</h2>
            <h3>header 3</h3>
            <div>div: projects</div>
            <p>paragraph
                <b> bold</b> 
                <i> italic</i>
            </p>
            <a href='#'>link</a>
            {styledJsx.styles}
        </>
    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple>
            {/* optional nested layout component */}
            {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default Projects;