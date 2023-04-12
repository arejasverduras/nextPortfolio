import styledJsx from '../styles/Page.styles';

// components
import PageLayout from "@/components/PageLayout/PageLayout";
// types
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

const About: NextPageWithLayout = () => {
    return (
        <div
        key="aboutpage"        
        className={`${styledJsx.className} container`}
                >
                    <div
                        className={`${styledJsx.className} sectionContent`}
                        key="aboutContent"
                        >
                            <h1>About</h1>
                            <div>bla</div>
                    </div>
                    {styledJsx.styles}
            </div>
    )
}

About.getLayout = function getLayout(page:ReactElement) {
    return (
        <PageLayout>
            {/* optional nested layout component */}
            {page}
        </PageLayout>
    )
}

export default About;