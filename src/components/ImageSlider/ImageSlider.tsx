import styledJsx from './ImageSlider.styles';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import ProjectSliderBtn from './ProjectSliderBtn';

interface ImageSliderProps {
    images: string[],
}


export const ImageSlider = ({images}:ImageSliderProps)=>{
    //load an array with images from props

    const [slideIndex, setSlideIndex] = useState(1);

    const autoScroll = true;
    let slideInterval:any;
    let intervalTime = 5000;



    const nextSlide = () => {
        if(slideIndex !== images.length) {
            setSlideIndex(slideIndex +1);
        } else if (slideIndex === images.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1){
            setSlideIndex(slideIndex -1);
        } else if (slideIndex === 1){
            setSlideIndex(images.length)
        }
    }

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    const moveDot = (index:number) => {
        setSlideIndex(index);
    }

    useEffect(()=>{
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    },[slideIndex]);
    
    return (
        <div className={`${styledJsx.className} imageSlider`}>
            {/* generate a 'Slide' component for eacht object in the array */}
            {images.map((image, index) => {
                return (
                    <div 
                    key={index}
                    className={`${styledJsx.className} ${slideIndex === index + 1? "projectSlide active-anim": "projectSlide"}`}
                    >
                        <Image 
                            src={process.env.PUBLIC_URL + image} 
                            alt="slider"
                            />
                    </div>
                )
            })}
            <ProjectSliderBtn moveSlide={prevSlide} direction={"prev"}/>
            <ProjectSliderBtn moveSlide={nextSlide} direction={"next"} />

            <div className={`${styledJsx.className} container-dots`}>
                {Array.from({length: images.length}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={()=> moveDot(index+1)}
                    className={`${styledJsx.className} ${slideIndex === index+1 ? "dot active": "dot"}`}
                    >
                    </div>
                ))}
            </div>
                {styledJsx.className}
        </div>
    )
}