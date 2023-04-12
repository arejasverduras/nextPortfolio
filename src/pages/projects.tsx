import styledJsx from '../styles/Page.styles';

// components
import PageLayout from "@/components/PageLayout/PageLayout";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const Projects: NextPageWithLayout = () => {
    return (
        <div
                key="projectPage"
                className={`${styledJsx.className} container`}
                >
                    <div
                        className={`${styledJsx.className} sectionContent`}
                        key="projectContent"
                        >
                            <h1>Project</h1>
                            <div>bla</div>
                    </div>
                    {styledJsx.styles}
            </div>
    )
}

Projects.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            {/* optional nested layout component */}
            {page}
        </PageLayout>
    )
}

export default Projects;