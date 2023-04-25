import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import NoReadMe from './NoReadMe.md';

export const ProjectReadMe = ({readMe}) => {

    const fileLocation = readMe.length > 5? readMe : NoReadMe;
    const [post, setPost] = useState('');

    useEffect(()=>{
        fetch(fileLocation)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    });

    return (
        <div className="ReadMe">
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
};