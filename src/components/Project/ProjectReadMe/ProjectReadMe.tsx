import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
import { Loading } from '@/components/Loading/Loading';

export const ProjectReadMe = ({readMe}) => {

    const fileLocation = readMe? readMe : undefined;
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState('');

    useEffect(()=>{
        
        if (fileLocation){
            fetch(fileLocation)
            .then(res => res.text())
            .then(res => {
                setPost(res)
                setTimeout(() => {
                    setLoading(false);    
                }, 400);
                
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setPost('<p>Loading ReadMe file failed</p>')
            });
        }
        
    });

    return (
        <>
            {loading? 
                <Loading/>
                : 
                <motion.div 
                    className="readMeContainer"
                    key="fullReadMe"
                    initial={{opacity: 0}}
                    animate={{opacity: [0,1], transition: {delay: 0.4}}}
                    // layout
                    >
                    <Markdown>
                        {post}
                    </Markdown>
                </motion.div>}
        </>
    )
};