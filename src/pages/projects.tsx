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

const Projects: NextPageWithLayout = () => {
    return (
        <>
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