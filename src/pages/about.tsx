import styledJsx from '../styles/About.styles';
import Image from 'next/image';
import { AnimatePresence,motion } from 'framer-motion';
import aboutImage from '../../public/images/projects/aboutChar.png';

// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const About: NextPageWithLayout = () => {
    return (
        <>
            <h1>About</h1>
            <hr className={`${styledJsx.className} hr`}/>
            <motion.div
                className={`${styledJsx.className} aboutImageHolder`}
                key="aboutImageHolder"
                layout
            >
                <Image src={aboutImage} alt="projectsImage" 
                className={`${styledJsx.className} aboutImage`}
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

About.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple>
            {/* optional nested layout component */}
            {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default About;