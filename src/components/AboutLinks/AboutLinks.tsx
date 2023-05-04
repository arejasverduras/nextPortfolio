import styledJsx from './AboutLinks.styles';
import Link from 'next/link';
import { GitHub } from '@/icons/github';
import { LinkedIn } from '@/icons/linkedin';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface AboutLinksProps {
    links: AboutLink[],
}

export interface AboutLink {
    link: string,
    description: string,
    icon: string,
}

export const AboutLinks = ({links}:AboutLinksProps) => {
    const linksItems = links.map((link, index) => 
        <Link
            key={index}
            href={link.link}
            target="_blank"
            prefetch={false}
            >
                <div
                    className={`${styledJsx.className} iconContainer`}
                >
                    {link.icon === 'github' && <GitHub color={'var(--colorCommands)'} /> }
                    {link.icon === 'linkedIn' && <LinkedIn color={'var(--colorBolds)'} /> }
                    {link.icon === 'resume' && <DocumentTextIcon color={'var(--colorHeaderBg)'} /> }
                </div>
                <div
                >
                    {link.description}
                </div>
        </Link>
    )
    
    return (
        <div
        className={`${styledJsx.className} container`}
        >
            {linksItems}
            {styledJsx.styles}
        </div>
    )
};
