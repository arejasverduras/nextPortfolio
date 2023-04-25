import styledJsx from './ProjectSliderBtn.styles';
// import leftArrow from '../../icons/left-arrow.svg';
// import rightArrow from '../../icons/right-arrow.svg';

import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    ArrowUturnLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'

import Image from 'next/image';

export default function ProjectSliderBtn({direction, moveSlide}:any) {
    return (
        <button
        onClick={moveSlide}
        >
                {direction === "next" ? 
                    <ChevronRightIcon
                    className={`${styledJsx.className} btn-slide next`}
                        /> 
                    : 
                    <ChevronLeftIcon 
                    className={`${styledJsx.className} btn-slide prev`}
                        />}
                    {styledJsx.styles}
        </button>
    )
}
