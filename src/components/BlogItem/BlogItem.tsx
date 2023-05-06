import styledJsx from './BlogItem.styles';
// dependencies
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
// types
// import { ProjectContent } from '@/components/Project/Project';

export interface BlogItemProps {
    content: any,
    index?: number,
    onPage?:boolean,
}

const animations = {
    itemsPop: (custom:any) => ({
    y: [200,0],
    opacity: [0,1], 
    transition: {delay: custom}
}),
itemsOut: (custom:any) => ({
    x: [-200,0],
    opacity: [1,0], 
    transition: {delay: custom}
}),
}
