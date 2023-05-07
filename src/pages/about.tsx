import aboutImage from '../../public/images/projects/aboutChar.png';
import Head from 'next/head';
import Image from 'next/image';

// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { AboutLinks } from '@/components/AboutLinks/AboutLinks';
// lib
import {getPageData} from '../lib/pages';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// context
import { ThemeProvider } from '@/context/ThemeContext';

export async function getStaticProps() {
    const content = await getPageData('/about');

    return {
        props: {
            content: content,
        }
    }
}


const About: NextPageWithLayout = ({content}:any) => {
    console.log(content)
    
    return (
        <div className="aboutPage">
            <div className="aboutPageContent">
                <Head>
                <title>About | Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express</title>
                </Head>
                <h1>About</h1>
                <div 
                    className="topImageHolder">
                    <Image 
                        className="topImage"
                        src={content.image} 
                        alt="portrait of Michiel, smiling" 
                        width="200" 
                        height="200"
                        />
                </div>
                <div
                    className="mdContent"
                    dangerouslySetInnerHTML={{__html: content.contentHtml}}
                    />
                <AboutLinks links={content.links} />
            </div>
        </div>
    )
}

About.getLayout = function getLayout(page:ReactElement) {
    return (
        <ThemeProvider>
            <PageLayout>
                <NestedSimple imageSrc={aboutImage}>
                    {page}
                </NestedSimple>
            </PageLayout>
        </ThemeProvider>
    )
}

export default About;