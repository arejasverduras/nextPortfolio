// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectsList } from '@/components/ProjectsList/ProjectsList';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import { projectData } from "@/content/data";
import projectsImage from '../../public/images/projects/portfolioChar.png';
import Head from "next/head";

const Projects: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Projects | Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express</title>
            </Head>
            <h1>Projects</h1>
            <ProjectsList projectData={projectData} />
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