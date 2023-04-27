import styles from './ProjectReadMe.module.css';
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
// import NoReadMe from './NoReadMe.md';

export const ProjectReadMe = ({readMe}) => {

    const fileLocation = readMe? readMe : undefined;
    const [post, setPost] = useState('');

    useEffect(()=>{
        
        if (fileLocation){
            fetch(fileLocation)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
        }
        
    });

    return (
        <motion.div 
            className={styles.container}
            key="fullReadMe"
            animate={{opacity: [0,1], transition: {delay: 0.4}}}
            // layout
            >
            <Markdown>
                {post}
            </Markdown>
        </motion.div>
    )
};