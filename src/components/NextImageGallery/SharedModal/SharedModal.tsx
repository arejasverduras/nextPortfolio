import styledJsx from './SharedModal.styles';
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { variants } from '@/utils/animationVariants'
import { range } from '@/utils/range'
import { reducedImageProps } from '../NextImageGallery'

export default function SharedModal({
  index,
  projectLink,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: any) {
  const [loaded, setLoaded] = useState(false)

  let filteredImages = images?.filter((img: reducedImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  )

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
                  src={`/images/projectImages/${projectLink}${currentImage.src}`}
                  width={navigation ? 1440 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  quality={100}
                  // placeholder='blur'
                  alt="Main slider picture"
                  onLoadingComplete={() => setLoaded(true)}
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
          {/* Buttons */}
          {loaded && (
            <div 
              className={`${styledJsx.className} buttons`}
              >
                <>
                  {index > 0 && (
                    <button
                    className={`${styledJsx.className} buttonLeft`}  
                      style={{ transform: 'translate3d(0, 0, 0)' }}
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
                      style={{ transform: 'translate3d(0, 0, 0)' }}
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
                    href={currentImage.src}
                    className={`${styledJsx.className} buttonFullSize`}  
                    target="_blank"
                    title="Open fullsize version"
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
                  onClick={() => closeModal()}
                  className={`${styledJsx.className} closeButton`}  
                >
                    <XMarkIcon 
                    className={`${styledJsx.className} icon`}  
                    />
                </button>
              </div>
            </div>
          )}

          {/* Bottom Nav bar */}
            <div 
            className={`${styledJsx.className} bottomNavHolder`}
              >
              <motion.div
                initial={false}
                className={`${styledJsx.className} bottomNav`}
              >
                <AnimatePresence initial={false}>
                  {filteredImages.map(({ id, src }) => (
                    <motion.button
                      initial={{
                        width: '0%',
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: '100%',
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: '0%' }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${styledJsx.className} ${
                        id === index
                          ? 'currentSmall'
                          : 'smallNotCurrent'
                      }  small`}
                    >
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${styledJsx.className} ${
                          id === index
                            ? 'currentSmallImage'
                            : 'notCurrentSmallImage'
                        } smallImage`}
                        src={`/images/projectImages/${projectLink}${src}`}
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
