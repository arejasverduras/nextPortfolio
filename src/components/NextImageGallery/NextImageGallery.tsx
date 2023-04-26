import styledJsx from './NextImageGallery.styles';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Modal from './Modal/Modal';


export interface reducedImageProps {
    id: number,
    src: string,
  }

  interface NextImageGalleryProps {
    images: string[]
  }

  export const NextImageGallery = ({images}:NextImageGalleryProps) => {
    // const router = useRouter()
    // const { photoId } = router.query
    const [photoId, setPhotoId] = useState(null);
    
    const reducedImages = images.map((image, index) => (
        {
            id: index,
            src: image
        }
    ));

    return (
        <main 
          className={`${styledJsx.className} container`}>
        {photoId !== null && (
          <Modal
            images={reducedImages}
            photoId={photoId}
            setPhotoId={setPhotoId}
          />
        )}
        <div 
          // className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4"
          className={`${styledJsx.className} imageList`}>

          {reducedImages.map(({ id, src}, index) => (
            <div
              key={id}
              onClick={()=>{setPhotoId(id)}}
              // as={`/p/${id}`}
            //   ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              className={`${styledJsx.className} imageContainer ${index === 0 && 'firstImage'}`}>
              {/* className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight" */}
              <Image
                alt="Michiel Roukens Portfolio Project Photo"
                // className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                className={`${styledJsx.className} imageItem`}
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={src}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
          ))}
        </div>
        {styledJsx.styles}
      </main>
    )
  }