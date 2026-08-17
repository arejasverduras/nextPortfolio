import styledJsx from './Modal.styles';
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import { reducedImageProps } from '../NextImageGallery'
import SharedModal from '../SharedModal/SharedModal'

export default function Modal({
  images,
  photoId, 
  setPhotoId,
  prefix,
}: {
  images: reducedImageProps[],
  photoId: number,
  setPhotoId: (id:number | null)=>void,
  prefix: string,
}) {
  const index = Number(photoId)

  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function handleClose() {
    setPhotoId(null)
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setPhotoId(newVal)
  }

  useKeypress('ArrowRight', () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (index > 0) {
      changePhotoId(index - 1)
    }
  })

  return (
    <Dialog
      static
      open={true}
      as={motion.div}
      key="dialog"
      animate={{opacity: [0,1]}}
      exit={{opacity: 0}}
      transition={{duration: 0.2, type: 'ease'}}
      onClose={handleClose}
      className={`${styledJsx.className} dialog`}
    >
      <SharedModal
        index={index}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
        prefix={prefix}
      />
    {styledJsx.styles}
    </Dialog>
  )
}
