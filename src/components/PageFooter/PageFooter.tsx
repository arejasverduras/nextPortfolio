import styledJsx from './PageFooter.styles.js';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface PageFooterProps {
    imageSrc:string
}

export const PageFooter = ({imageSrc}:PageFooterProps) => {
    return (
        <AnimatePresence>      
            <motion.div 
                className={`${styledJsx.className} container`}
                key="pageFooter"
                layout
                layoutId="pageFooter"
                >
                <hr className={`${styledJsx.className} hr`}/>
                <motion.div
                    className={`${styledJsx.className} footerImageHolder`}
                    key="aboutImageHolder"
                    layout
                >
                    <Image src={imageSrc} alt="projectsImage" 
                    className={`${styledJsx.className} footerImage`}
                    />
                </motion.div>
                <div
                    className={`${styledJsx.className} stylesHolder`}
                >
                    <h2>header 2</h2>
                    <h3>header 3</h3>
                    <p>paragraph
                        <b> bold</b> 
                        <i> italic</i>
                    </p>
                    <a href='#'>link</a>
                </div>
                {styledJsx.styles}
            </motion.div>
        </AnimatePresence>
  
    )
}