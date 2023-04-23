import styledJsx from './Project.styles';
// dep
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';

interface ProjectProps {
    content:any,
}

export const Project = ({content}:ProjectProps) => {
    return (
        <>
            <Head>
                <title>{content.title} | Michiel Roukens | Portfolio | Front-end web developer | React, Next, Node, Express</title>
            </Head>
            <div className={`${styledJsx.className} container`}>
                <h1>{content.title}</h1>
                
            </div>
        {styledJsx.styles}
        </>
    )
}
