import styledJsx from './NextImageGallery.styles';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { AnimatePresence, motion } from 'framer-motion';


export interface GalleryImage {
    src: string,
    alt?: string,
    caption?: string,
  }

export interface reducedImageProps extends GalleryImage {
    id: number,
  }

  interface NextImageGalleryProps {
    images: Array<string | GalleryImage>,
    prefix: string,
    style?: {[key: string]:string | number},
  }

  const animations = {
    imageTile: (custom:number) => {
      return {
        scale: [0,1],
        transition: {delay: custom}
      }
    }
  }

  export const NextImageGallery = ({images, prefix,style}:NextImageGalleryProps) => {
    const [photoId, setPhotoId] = useState<number | null>(null);
    
    const reducedImages = images.map((image, index) => ({
        id: index,
        ...(typeof image === 'string' ? { src: image } : image),
    }));

    const limitedImages = reducedImages.slice(1, 5).map(({id, src, alt}, index) => {
        const showRemainingCount = id === 4 && reducedImages.length > 4;

        return (
          <motion.button
              type="button"
              key={id}
              onClick={()=>{setPhotoId(id)}}
              variants={animations}
              animate="imageTile"
              custom={((index + 1) * 0.15)}
              aria-label={`Open project image ${id + 1} of ${reducedImages.length}`}
              className={`${styledJsx.className} otherImages`}>
              <Image
                alt={alt || ""}
                className={`${styledJsx.className} imageItem`}
                src={`/images/${prefix}/${src}`}
                fill
                sizes="(max-width: 600px) 25vw, 225px"
              />
              {showRemainingCount && (
                <div className={`${styledJsx.className} lastItemOverlay`}>
                  <div>{`+${reducedImages.length-4}`}</div>
                </div>
              )}
            </motion.button>
        )
    })

    return (
        <main 
          className={`${styledJsx.className} container`}
          style={style && style}
          >
        <AnimatePresence>
          {photoId !== null && (
            <Modal
              images={reducedImages}
              photoId={photoId}
              setPhotoId={setPhotoId}
              prefix={prefix}
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          className={`${styledJsx.className} firstImageContainer`}
          onClick={()=>{setPhotoId(reducedImages[0].id)}}
          role="button"
          tabIndex={0}
          aria-label={`Open project image 1 of ${reducedImages.length}`}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setPhotoId(reducedImages[0].id);
            }
          }}
          key="firstImageContainer"
          animate={{
            scaleY: [0.4,1],
            opacity: [0,1],
            transition: {delay: 1, type: "tween"}
        }}
          >
          <Image
                  alt={reducedImages[0].alt || "Project preview"}
                  className={`${styledJsx.className} firstImage`}
                  src={`/images/${prefix}/${reducedImages[0].src}`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 900px"
                />
          </motion.div>
        
        <div 
          className={`${styledJsx.className} imageList`}>
          {limitedImages}
        </div>
        {styledJsx.styles}
      </main>
    )
  }
