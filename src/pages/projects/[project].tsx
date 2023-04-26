import styledJsx from '../../styles/project.styles.js';
// dep
import Head from 'next/head';
import Image from 'next/image.js';
import dynamic from 'next/dynamic.js';
import { useRouter } from 'next/router.js';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// lib
import {getAllProjects, getProject} from "@/lib/project.js"
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
import { Project } from '@/components/Project/Project';
import { ImageSlider } from '@/components/ImageSlider/ImageSlider';
import { NextImageGallery } from '@/components/NextImageGallery/NextImageGallery';
// utils
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';
// dynamics
// const ProjectReadMe = dynamic(()=> import ('../../components/Project/ProjectReadMe/ProjectReadMe').then((mod) => mod.ProjectReadMe))

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
    const {images, link, links, title} = projectData;
    
    const router = useRouter();
    const { photoId } = router.query
    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
        if (lastViewedPhoto && !photoId) {
          // @ts-expect-error;
            lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
          setLastViewedPhoto(null)
        }
      }, [photoId, lastViewedPhoto, setLastViewedPhoto])

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
                {/* <Project content={projectData}/> */}
                {projectData.images.length > 0 && (
                    <motion.div 
                        className={`${styledJsx.className} images`}
                        variants={animations}
                        key={title+"images"}
                        animate="imagesIn"
                        exit="imagesOut"
                        layout
                        >
                                    {/* <Image src={images[0]} alt="projectImage" width='1024' height='200'
                                        className={`${styledJsx.className} logoImage`}/> */}
                                    
                                    <NextImageGallery images={images} />
                                    {/* <ImageSlider images={images} /> */}
                    </motion.div>
                    
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
                    className={`${styledJsx.className} readme`}
                    variants={animations}
                    key={title+"readme"}
                    animate="leftIn"
                    exit="imagesOut"
                    layout
                    >
                    readme
                    {/* <ProjectReadMe readMe={links.readme}/> */}
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