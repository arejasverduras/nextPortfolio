import React from 'react';
import leftArrow from '../../icons/left-arrow.svg';
import rightArrow from '../../icons/right-arrow.svg';
import Image from 'next/image';

export default function ProjectSliderBtn({direction, moveSlide}:any) {
    return (
        <button
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next': 'btn-slide prev'}
        >
                <Image src={direction === "next" ? rightArrow: leftArrow}
                    alt=""
                    width='50'
                    
                    />
        </button>
    )
}
