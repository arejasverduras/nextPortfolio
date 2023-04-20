import styledJsx from './NestedSimple.styles';
// components
import { PageFooter } from '@/components/PageFooter/PageFooter';

export default function NestedSimple ({children, imageSrc}:any) {
    return (
        <>
            <div
                className={`${styledJsx.className} container`}
                >
                    <div
                        className={`${styledJsx.className} sectionContent`}
                        >
                            {children}
                            <PageFooter imageSrc={imageSrc}/>
                    </div>
            </div>
            {styledJsx.styles}
        </>
    )
}