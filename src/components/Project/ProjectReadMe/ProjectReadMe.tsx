import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
import { Loading } from '@/components/Loading/Loading';

export const ProjectReadMe = ({readMe, loading, setLoading}) => {

    const fileLocation = readMe? readMe : undefined;
    
    const [post, setPost] = useState('');

    const animations = {
        loading: {
            opacity: [1,0.1,1],
            transition: {duration: 0.4, repeat: Infinity}
        }
    }

    useEffect(()=>{
        // setLoading(true);
        if (fileLocation){
            fetch(fileLocation)
            .then(res => res.text())
            .then(res => {
                setPost(res)
                setTimeout(() => {
                    setLoading(false);    
                }, 1000);
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
            {!loading && 
                // <Loading/>
                // <motion.div
                // className="loadingReadMe"
                // key="loadingReadMe"
                // variants={animations}
                // animate="loading"
                // >
                //     Loading from GitHub..
                // </motion.div>
                
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