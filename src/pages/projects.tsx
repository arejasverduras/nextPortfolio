import styledJsx from '@/styles/Projects.styles';
// dependencies
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
import { ProjectItem } from "@/components/ProjectItem/ProjectItem";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';
// data
import { projectData } from "@/content/data";
import projectsImage from '../../public/images/projects/portfolioChar.png';


const Projects: NextPageWithLayout = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredData, setFilteredData] = useState(projectData);
    
    const listItems = filteredData.map((item, index) => 
        <ProjectItem 
            content={item} 
            key={index}
            index={index}
            />
    )

    const handleChange = ({target}:any) =>{
        setFilterTerm(target.value.toLowerCase());
    }

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
            <motion.div
                className={`${styledJsx.className} filterHolder`}
                key="filterHolder"
                animate={{scale: [0,1], transition: {delay: filteredData.length * 0.35}}}
                >
                 <div>
                    {`${" >"}`}
                </div>
                <input 
                    className={`${styledJsx.className} filterInput`}
                    onChange={handleChange} 
                    placeholder="find.."
                    value={filterTerm}
                    />
               
            </motion.div>
            
            <motion.div
                key="projectListItems"
                animate={{opacity: [0,1], transition: {delay: 0.4}}}
                className={`${styledJsx.className} listItems`}
                >
                    {listItems}
                </motion.div>
            
            <hr className={`${styledJsx.className} hr`}/>
            <motion.div
                className={`${styledJsx.className} projectsImageHolder`}
                key="projectsImageHolder"
                layout
            >
                <Image src={projectsImage} alt="projectsImage" 
                className={`${styledJsx.className} projectsImage`}
                />
            </motion.div>
            
            <h2>header 2</h2>
            <h3>header 3</h3>
            <p>paragraph
                <b> bold</b> 
                <i> italic</i>
            </p>
            <a href='#'>link</a>
            {styledJsx.styles}
        </>
    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple>
                {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default Projects;