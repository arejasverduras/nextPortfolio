import { useEffect, useState } from 'react';
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectsFilter } from '@/components/ProjectsFilter/ProjectsFilter';
import { ProjectsListItems } from '@/components/ProjectsListItems/ProjectsListItems';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import { projectData } from "@/content/data";
import projectsImage from '../../public/images/projects/portfolioChar.png';


const Projects: NextPageWithLayout = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredData, setFilteredData] = useState(projectData);

    useEffect(()=>{
        if (filterTerm === ''){
            setFilteredData(projectData);
            return;
        }
        const filtered = filteredData.filter(project => 
                project.title.toLowerCase().includes(filterTerm) ||
                project.description.toLowerCase().includes(filterTerm) ||
                project.type.toLowerCase().includes(filterTerm) ||
                project.tech.some((techItem) => techItem.toLowerCase().includes(filterTerm)) ||
                project.title.toLowerCase().includes(filterTerm));
        setFilteredData(filtered);
       
    },[filterTerm]);

    return (
        <>
            <h1>Projects</h1>
            <ProjectsFilter 
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}                
                filteredDataLength={filteredData.length}
                />
            <ProjectsListItems 
                filteredData={filteredData} 
                />
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