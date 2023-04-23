import styledJsx from '../styles/About.styles';
import aboutImage from '../../public/images/projects/aboutChar.png';
import Head from 'next/head';
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const About: NextPageWithLayout = () => {
    return (
        <>
            <Head>
            <title>About | Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express</title>
            </Head>
            <h1>About</h1>
            {styledJsx.styles}
        </>
    )
}

About.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={aboutImage}>
            {/* optional nested layout component */}
            {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default About;