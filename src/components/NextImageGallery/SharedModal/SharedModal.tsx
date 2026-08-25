import styledJsx from './SharedModal.styles';
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import { variants } from '@/utils/animationVariants'
import { reducedImageProps } from '../NextImageGallery'

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  currentPhoto,
  direction,
  prefix,
}: any) {
  const thumbnailRefs = useRef<Record<number, HTMLButtonElement | null>>({})

  useEffect(() => {
    thumbnailRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [index])

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1)
      }
    },
    trackMouse: true,
  })

  let currentImage = images ? images[index] : currentPhoto

  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className={`${styledJsx.className} container `}
        {...handlers}
      >
        {/* Main image */}
        <div 
          className={`${styledJsx.className} mainImageContainer `}>
          <div 
          className={`${styledJsx.className} mainImageHolder `}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`${styledJsx.className} mainImage `}
              >
                <Image
                  src={`/images/${prefix}/${currentImage.src}`}
                  fill
                  priority
                  quality={100}
                  sizes="100vw"
                  alt={`Project image ${index + 1} of ${images.length}`}
                  style={{ objectFit: 'contain' }}
                  className={`${styledJsx.className} mainImageImage `}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div 
        className={`${styledJsx.className} bottom `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {currentImage.caption && (
              <motion.p
                key={currentImage.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className={`${styledJsx.className} caption`}
              >
                {currentImage.caption}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Buttons */}
            <div 
              className={`${styledJsx.className} buttons`}
              >
                <>
                  {index > 0 && (
                    <button
                    className={`${styledJsx.className} buttonLeft`}  
                      type="button"
                      aria-label="Previous image"
                      onClick={() => changePhotoId(index - 1)}
                    >
                      <ChevronLeftIcon
                      className={`${styledJsx.className} icon`}  
                      />
                    </button>
                  )}
                  {index + 1 < images.length && (
                    <button
                      className={`${styledJsx.className} buttonRight`}  
                      type="button"
                      aria-label="Next image"
                      onClick={() => changePhotoId(index + 1)}
                    >
                      <ChevronRightIcon 
                      className={`${styledJsx.className} icon`}  
                      />
                    </button>
                  )}
                </>

              <div 
                className={`${styledJsx.className} openFullSize`}  
                >
                  <a
                    href={`/images/${prefix}/${currentImage.src}`}
                    className={`${styledJsx.className} buttonFullSize`}  
                    target="_blank"
                    title="Open fullsize version"
                    aria-label="Open full-size image in a new tab"
                    rel="noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon 
                    className={`${styledJsx.className} icon`}  
                    />
                  </a>
              </div>
              <div 
              className={`${styledJsx.className} close`}  
              >
                <button
                  type="button"
                  aria-label="Close image gallery"
                  onClick={() => closeModal()}
                  className={`${styledJsx.className} closeButton`}  
                >
                    <XMarkIcon 
                    className={`${styledJsx.className} icon`}  
                    />
                </button>
              </div>
            </div>

          {/* Bottom Nav bar */}
            <div 
            className={`${styledJsx.className} bottomNavHolder`}
              >
              <motion.div
                initial={false}
                className={`${styledJsx.className} bottomNav`}
              >
                <AnimatePresence initial={false}>
                  {images.map(({ id, src, alt }: reducedImageProps) => (
                    <motion.button
                      ref={(element) => { thumbnailRefs.current[id] = element }}
                      type="button"
                      aria-label={`View project image ${id + 1}`}
                      aria-current={id === index ? 'true' : undefined}
                      initial={false}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                      }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${styledJsx.className} ${
                        id === index
                          ? 'currentSmall'
                          : 'smallNotCurrent'
                      }  small`}
                    >
                      <Image
                        alt={alt || ""}
                        fill
                        sizes="96px"
                        className={`${styledJsx.className} ${
                          id === index
                            ? 'currentSmallImage'
                            : 'notCurrentSmallImage'
                        } smallImage`}
                        src={`/images/${prefix}/${src}`}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
        </div>
      </div>
      {styledJsx.styles}
    </MotionConfig>
  )
};
