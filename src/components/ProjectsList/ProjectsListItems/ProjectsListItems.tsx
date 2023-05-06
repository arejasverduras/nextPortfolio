import styledJsx from './ProjectsListItems.styles';
// components
import { ProjectItem } from './ProjectItem/ProjectItem';
import { motion } from 'framer-motion';
// types
import { ProjectItemProps } from './ProjectItem/ProjectItem';

interface ProjectsListItemsProps {
    filteredData: ProjectItemProps["content"][],
    prefix: string,
}

export const ProjectsListItems = ({filteredData, prefix}:ProjectsListItemsProps) => {
    const listItems = filteredData.map((item, index) => 
                <ProjectItem 
                    content={item} 
                    key={item.link}
                    index={index}
                    prefix={prefix}
                    />
    )
    
    return (
        <motion.div
                key="projectListItems"
                animate={{opacity: [0,1], transition: {delay: 0.4}}}
                className={`${styledJsx.className} listItems`}
                >
                    {listItems}
            {styledJsx.styles}
            </motion.div>
            
    )
}
