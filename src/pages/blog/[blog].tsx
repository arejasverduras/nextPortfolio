// dep
import Head from 'next/head';
import Image from 'next/image';

// lib
import { getAllBlogIds, getPostData } from '@/lib/blog';

// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';

// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
// import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
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
    return (
        <>
            {blogData.images && (
                <NextImageGallery images={blogData.images} prefix="blog"/>
            )}
            <div
                className='MDdescription' 
                dangerouslySetInnerHTML={{__html: blogData.contentHtml}}/>
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