import styledJsx from '../../styles/blog.styles'
// dep
import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence,motion } from 'framer-motion';
// lib
import { getAllBlogIds, getPostData } from '@/lib/blog';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
import { NextImageGallery } from '@/components/NextImageGallery/NextImageGallery';
// data
import blogImage from '../../../public/images/projects/resume.png';

export async function getStaticPaths () {
    // return getAllProjects();

    const paths = getAllBlogIds();
    return {
        paths,
        fallback: false,
    }
};

export async function getStaticProps ({params}:any) {
    const blogData = await getPostData(params.blog);

    return {
        props: {
            blogData: blogData,
        }
    }
}

const BlogPost: NextPageWithLayout = ({blogData}:any) =>{
    const {images, link, links, title } = blogData;

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
                        content={blogData} 
                        key={link}
                        prefix="blog"
                        onPage
                        />
                </div>
                {blogData.images?.length > 0 && (
                    <div 
                        className={`${styledJsx.className} images`}
                        key={title+"images"}
                        >
                            <NextImageGallery 
                                images={images} 
                                prefix="blog"
                                style={{maxWidth: 400}}
                                />
                    </div>
                )}
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
                            dangerouslySetInnerHTML={{__html: blogData.contentHtml}}
                            />
                </motion.div>
                
            </div>
            {styledJsx.styles}
        </>
    )
}

BlogPost.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={blogImage}>
                {page}
                
            </NestedSimple>
        </PageLayout>
    )
}

export default BlogPost;