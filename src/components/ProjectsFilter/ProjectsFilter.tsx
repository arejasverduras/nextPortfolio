import styledJsx from './ProjectsFilter.styles';
import { motion } from 'framer-motion';

interface ProjectsFilterProps {
    filterTerm: string,
    setFilterTerm: (term:string)=>void,
    filteredDataLength: number,
}

export const ProjectsFilter = ({filterTerm, setFilterTerm, filteredDataLength}:ProjectsFilterProps) => {
    const handleChange = ({target}:any) =>{
        setFilterTerm(target.value.toLowerCase());
    }
    
    return (
        <motion.div
            className={`${styledJsx.className} filterHolder`}
            key="filterHolder"
            animate={{scale: [0,1], transition: {delay: filteredDataLength * 0.35}}}
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
        {styledJsx.styles}
        </motion.div>
        
    )
};
