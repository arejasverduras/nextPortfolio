import styledJsx from '../../styles/project.styles.js';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { GitHub } from '@/icons/github';
// dep
import Head from 'next/head';
import dynamic from 'next/dynamic.js';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// lib
import {getAllProjects, getProject} from "@/lib/project.js";
import {getAllProjectsMd, getProjectMd }from "@/lib/projectMd.js";
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
import { NextImageGallery } from '@/components/NextImageGallery/NextImageGallery';

//context
import { ThemeProvider } from '@/context/ThemeContext.js';

// dynamics
const ProjectReadMe = dynamic(()=> import ('../../components/Project/ProjectReadMe/ProjectReadMe').then((mod) => mod.ProjectReadMe))

// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';
// media
import projectImage from '../../../public/images/projects/portfolioChar.png';

export async function getStaticPaths () {
    // return getAllProjects();

    const paths = getAllProjectsMd();
    return {
        paths,
        fallback: false,
    }
};

export async function getStaticProps ({params}:any) {
    // const projectData =  await getProject(params.project);
    const projectData = await getProjectMd(params.project);

   
    return {
        props: {
            projectData: projectData,
        }
    }
}


const ProjectPage: NextPageWithLayout = (props)=>{
    // @ts-expect-error;
    const {projectData} = props;
    const {images, link, links, title, shortText, highlights} = projectData;
    const [showReadMe, setShowReadMe] = useState(false);
    const [loading, setLoading] = useState(true);
   
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
        },
        loadingReadMe: {
            opacity: [1,0.1,1],
            transition: {duration: 0.6, repeat: Infinity}
        },
        loadingSpin: {
            rotate: 360,
            transition: {duration: 0.6, repeat: Infinity, type: "anticipate" }
        },
        loadingFinished: {}
    }

    const toggleReadMe = () => {
        setShowReadMe(!showReadMe);
    }

    useEffect(()=>{
        let root = document.documentElement;
        if (projectData.themeColor){
            root.style.setProperty('--colorHeaderBg',projectData.themeColor);
            root.style.setProperty('--colorInputBorders',projectData.themeColor);
        }
        
        if (projectData.themeBgColor && projectData.themeTextColor) {
            root.style.setProperty('--colorBg',projectData.themeBgColor);
            root.style.setProperty('--colorText',projectData.themeTextColor);
            root.style.setProperty('--colorBorders',projectData.themeTextColor);
        }

    },[projectData])

    useEffect(()=>{
        if (showReadMe){
            setLoading(true);
        } else {
            setLoading(false);
        }
        
    },[showReadMe])

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
                        prefix="blog"
                        onPage
                        />
                </div>
                {projectData.images.length > 0 && (
                    <div 
                        className={`${styledJsx.className} images`}
                        key={title+"images"}
                        >
                            <NextImageGallery 
                                images={images} 
                                // projectLink={projectData.link}
                                prefix={`projectImages/${projectData.link}`}
                                />
                    </div>
                )}
                {/* <motion.div 
                    className={`${styledJsx.className} collaborators`}
                    variants={animations}
                    key={title+"collaborators"}
                    animate="rightIn"
                    exit="imagesOut"
                    layout
                    >
                    collaborators
                </motion.div> */}
                <motion.div 
                    className={`${styledJsx.className} description`}
                    variants={animations}
                    key={title+"description"}
                    animate="leftIn"
                    exit="imagesOut"
                    layout
                    >
                        <h1 className={`${styledJsx.className} descriptionH1`}>{title}</h1>
                        <div 
                            className="MDdescription"
                            dangerouslySetInnerHTML={{__html: projectData.contentHtml}}
                            />
                </motion.div>

                {links.readMe && (<motion.div 
                    className={`${styledJsx.className} readme ${showReadMe && 'readMeVisible'}`}
                    variants={animations}
                    key={title+"readme"}
                    animate="rightIn"
                    exit="imagesOut"
                    layout
                    >
                    <h2
                    className={`${styledJsx.className} readmeToggle ${showReadMe && 'readMeToggleVisible'}`}
                        onClick={(toggleReadMe)}>
                            <div className={`${styledJsx.className} readmeSubHolder`}>
                                <motion.div 
                                    className={`${styledJsx.className} readmeSubHolderIcon`}
                                    key="readmeSubHolderIconGit"
                                    variants={animations}
                                    animate={showReadMe && loading? "loadingSpin": {}}
                                    >
                                    <GitHub color={showReadMe && !loading ? 'var(--colorH2)' : 'var(--colorText'} />
                                </motion.div>
                                readme 
                            </div>
                            {showReadMe && loading && (
                                <motion.div
                                className="loadingReadMe"
                                key="loadingReadMe"
                                variants={animations}
                                animate="loadingReadMe"
                                >
                                    Loading from GitHub..
                                </motion.div>
                            )}
                            <ChevronRightIcon className={`${styledJsx.className} readmeIcon ${showReadMe && 'readMeIconVisible'}`} />
                    </h2>
                    <AnimatePresence>
                    {showReadMe && (
                        <ProjectReadMe 
                            loading={loading} 
                            setLoading={setLoading} 
                            readMe={links.readMe}
                            />
                    )}
                    </AnimatePresence>
                </motion.div>)}
                
            </div>
            {styledJsx.styles} 
        </>
    )
}

ProjectPage.getLayout = function getLayout(page:ReactElement) {
    return (
        <ThemeProvider>
            <PageLayout>
                <NestedSimple imageSrc={projectImage}>
                    {page}
                </NestedSimple>
            </PageLayout>
        </ThemeProvider>
    )
}

export default ProjectPage;