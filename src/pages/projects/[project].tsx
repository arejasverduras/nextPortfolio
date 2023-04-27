import styledJsx from '../../styles/project.styles.js';
// dep
import Head from 'next/head';
import dynamic from 'next/dynamic.js';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// lib
import {getAllProjects, getProject, getReadMe} from "@/lib/project.js"
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
import { NextImageGallery } from '@/components/NextImageGallery/NextImageGallery';

// dynamics
const ProjectReadMe = dynamic(()=> import ('../../components/Project/ProjectReadMe/ProjectReadMe').then((mod) => mod.ProjectReadMe))

// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';
// media
import projectImage from '../../../public/images/projects/portfolioChar.png';

export async function getStaticPaths () {
    return getAllProjects();
};

export async function getStaticProps ({params}:any) {
    const projectData =  await getProject(params.project);
   
    
    return {
        props: {
            projectData: projectData,
        }
    }
}

interface projectProps {
    // projectData:any,
}

const ProjectPage: NextPageWithLayout = (props)=>{
    // @ts-expect-error;
    const {projectData} = props;
    const {images, link, links, title, shortText, highlights} = projectData;
    const [showReadMe, setShowReadMe] = useState(false);
   
    const animations = {
        imagesIn: {
            scaleY: [0.4,1],
            opacity: [0,1],
            transition: {delay: 1, type: "tween"}
        },
        rightIn: {
            x: [600,0],
            opacity: [0,1],
            transition: {delay: 0.4, type:"tween"}
        },
        leftIn: {
            x: [-600,0],
            opacity: [0,1],
            transition: {delay: 0.6, type: "tween"}
        }
    }

    const toggleReadMe = () => {
        setShowReadMe(!showReadMe);
    }

    return (
        <>
            <Head>
                <title>{`${title}  Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express`}</title>
            </Head>
            <div className={`${styledJsx.className} container`}>
                <div className={`${styledJsx.className} projectItem`}>
                    <ProjectItem 
                        content={projectData} 
                        key={link}
                        onPage
                        />
                </div>
                {projectData.images.length > 0 && (
                    <div 
                        className={`${styledJsx.className} images`}
                        key={title+"images"}
                        >
                            <NextImageGallery images={images} />
                    </div>
                )}
                <motion.div 
                    className={`${styledJsx.className} collaborators`}
                    variants={animations}
                    key={title+"collaborators"}
                    animate="rightIn"
                    exit="imagesOut"
                    layout
                    >
                    collaborators
                </motion.div>
                <motion.div 
                    className={`${styledJsx.className} description`}
                    variants={animations}
                    key={title+"description"}
                    animate="leftIn"
                    exit="imagesOut"
                    layout
                    >
                        <h1 className={`${styledJsx.className} descriptionH1`}>{title}</h1>
                    {shortText}
                </motion.div>
                <motion.div 
                    className={`${styledJsx.className} readme`}
                    variants={animations}
                    key={title+"readme"}
                    animate="rightIn"
                    exit="imagesOut"
                    // layout
                    onClick={(toggleReadMe)}
                    >
                    readme
                    <AnimatePresence>
                    {showReadMe && links.readMe && (
                        <ProjectReadMe readMe={links.readMe}/>
                    )}
                    </AnimatePresence>
                </motion.div>
                
            </div>
            {styledJsx.styles} 
        </>
    )
}

ProjectPage.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={projectImage}>
                {page}
                
            </NestedSimple>
        </PageLayout>
    )
}

export default ProjectPage;