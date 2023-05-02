// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectsList } from '@/components/ProjectsList/ProjectsList';
import { useEffect } from "react";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import { projectData } from "@/content/data";
import projectsImage from '../../public/images/projects/portfolioChar.png';
import Head from "next/head";

export async function getStaticProps({}:any) {
    const allProjectData = projectData;

    return {
        props: {
            allProjectData: allProjectData,
        }
    }
}

const Projects: NextPageWithLayout = (props) => {
        // @ts-expect-error;
        const {allProjectData} = props;
    
        useEffect(()=>{
            let root = document.documentElement;
            root.style.setProperty('--colorHeaderBg', 'var(--currentHeaderBg)');
            root.style.setProperty('--colorInputBorders', 'var(--currentHeaderBg)');
            root.style.setProperty('--colorBg','var(--currentBg');
            root.style.setProperty('--colorText','var(--currentText');
            root.style.setProperty('--colorBorders','var(--currentText');

        })

    return (
        <>
            <Head>
                <title>Projects | Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express</title>
            </Head>
            <h1>Projects</h1>
            <ProjectsList projectData={allProjectData} />
        </>
    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={projectsImage}>
                {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default Projects;