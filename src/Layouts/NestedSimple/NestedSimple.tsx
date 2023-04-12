import styledJsx from './NestedSimple.styles';

export default function NestedSimple ({children}:any) {
    return (
        <>
         <div
            className={`${styledJsx.className} container`}
            >
                <div
                    className={`${styledJsx.className} sectionContent`}
                    >
                        {children}
                </div>
        </div>
        {styledJsx.styles}
        </>
    )
}