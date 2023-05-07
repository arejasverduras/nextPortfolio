// lib
import {getAllBlogData} from "@/lib/blog"
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import Link from "next/link";
import Image from "next/image";
import { ProjectsList } from "@/components/ProjectsList/ProjectsList";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import blogImage from '../../public/images/projects/resume.png';
// context
import { ThemeProvider } from "@/context/ThemeContext";

export async function getStaticProps() {
    const allPostsData = await getAllBlogData();

    return {
        props: {
            allPostsData: allPostsData,
        }
    }
}

interface BlogProps {
    allPostsData: any,
}


const Blog: NextPageWithLayout = ({allPostsData}:BlogProps) => {
    return (
        <>
        <h1>Blog</h1>
        <ProjectsList 
            projectData={allPostsData}
            prefix="blog"
            />
        </>
    )
};

Blog.getLayout = function getLayout(page:ReactElement) {
    return (
        <ThemeProvider>
            <PageLayout>
                <NestedSimple imageSrc={blogImage}>
                    {page}
                </NestedSimple>
            </PageLayout>
        </ThemeProvider>
    )
}

export default Blog;