// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const Projects: NextPageWithLayout = () => {
    return (
        <>
            <h1>Projects</h1>
            <h2>header 2</h2>
            <h3>header 3</h3>
            <div>div: projects bla</div>
            <p>paragraph
                <b> bold</b> 
                <i> italic</i>
            </p>
            <a href='#'>link</a>
        </>

    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            <NestedSimple>
            {/* optional nested layout component */}
            {page}
            </NestedSimple>
        </PageLayout>
    )
}

export default Projects;