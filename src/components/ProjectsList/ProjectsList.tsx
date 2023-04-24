import { useState, useEffect } from 'react';
// components
import { ProjectsFilter } from './ProjectsFilter/ProjectsFilter';
import { ProjectsListItems } from './ProjectsListItems/ProjectsListItems';
// types
import { ProjectItemProps } from './ProjectsListItems/ProjectItem/ProjectItem';
import { ProjectContent } from '../Project/Project';

interface ProjectsListProps{
    projectData: ProjectContent[];
}

export const ProjectsList = ({projectData}:ProjectsListProps) => {
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
};
