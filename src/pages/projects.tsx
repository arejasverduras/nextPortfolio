// components
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import NestedSimple from '@/Layouts/NestedSimple/NestedSimple';
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const Projects: NextPageWithLayout = () => {
    return (
        <>
            <h1>Project</h1>
            <div>bla</div>
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