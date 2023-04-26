import styledJsx from './Modal.styles';
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import useKeypress from 'react-use-keypress'
import { reducedImageProps } from '../NextImageGallery'
import SharedModal from '../SharedModal/SharedModal'

export default function Modal({
  images,
  photoId, 
  setPhotoId
}: {
  images: reducedImageProps[],
  photoId: number,
  setPhotoId: (id:number | null)=>void,
}) {
  let overlayRef = useRef()

  let index = Number(photoId)

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    setPhotoId(null)
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
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
      initialFocus={overlayRef}
      className={`${styledJsx.className} dialog`}
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className={`${styledJsx.className} dialogOverlay`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    {styledJsx.styles}
    </Dialog>
    
  )
}
