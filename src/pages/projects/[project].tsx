import projectImage from '../../../public/images/projects/portfolioChar.png';
// lib
import {getAllProjects, getProject} from "@/lib/project.js"
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from '@/components/ProjectsList/ProjectsListItems/ProjectItem/ProjectItem';
import { Project } from '@/components/Project/Project';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';

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

const project: NextPageWithLayout = (props)=>{
    // @ts-expect-error;
    const {projectData} = props;

    return (
        <>
            <ProjectItem 
                content={projectData} 
                key={projectData.link}
                onPage
                />
            <Project content={projectData}/>
        </>
    )
}

project.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple imageSrc={projectImage}>
                {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default project;