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

    let limitedImages = [];
    reducedImages.forEach(({id,src}, index) => {
      if (index > 0 && index < 5){
        limitedImages.push(
          <div
              key={id}
              onClick={()=>{setPhotoId(id)}}

              className={`${styledJsx.className} otherImages`}>
              <Image
                alt="Michiel Roukens Portfolio Project Photo"
                className={`${styledJsx.className} imageItem`}
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={src}
                width={720}
                height={480}
                sizes="(max-width: 640px) 50vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 50vw,
                  50vw"
              />
              {index === 4 && 
              (<div className={`${styledJsx.className} lastItemOverlay`}>
                <div>{`+${reducedImages.length-4}`}</div>
              </div>)}
            </div>
        )
      }
    })

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
          className={`${styledJsx.className} firstImageContainer`}
          onClick={()=>{setPhotoId(reducedImages[0].id)}}
          >
          <Image
                  alt="Michiel Roukens Portfolio Project Photo first project"
                  className={`${styledJsx.className} firstImage`}
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  src={reducedImages[0].src}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
          </div>
        
        <div 
          className={`${styledJsx.className} imageList`}>
          

          {limitedImages}
          {/* {reducedImages.map(({ id, src}, index) => 
            <div
              key={id}
              onClick={()=>{setPhotoId(id)}}

              className={`${styledJsx.className} otherImages`}>
              <Image
                alt="Michiel Roukens Portfolio Project Photo"
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
          )} */}
        </div>
        {styledJsx.styles}
      </main>
    )
  }