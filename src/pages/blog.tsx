// lib
import {getAllBlogData} from "@/lib/blog"
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import Link from "next/link";
import Image from "next/image";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import blogImage from '../../public/images/projects/resume.png';

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
            <ul className="list">
                {allPostsData.map(({ blog, date, title }) => (
                <li className="listItem" key={blog}>
                <Link href={`/blog/${blog}`}>{title}</Link>
                <br />
                {/* <small className="lightText">
                    <Date dateString={date} />
                </small> */}
                </li>
            ))}
            </ul>
        </>
    )
};

Blog.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={blogImage}>
                {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default Blog;