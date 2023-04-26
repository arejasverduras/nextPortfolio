import styledJsx from './NextImageGallery.styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

// import Modal from '../components/Modal'


export interface reducedImageProps {
    id: number,
    src: string,
  }

  interface NextImageGalleryProps {
    images: string[]
  }

  export const NextImageGallery = ({images}:NextImageGalleryProps) => {
    const router = useRouter()
    const { photoId } = router.query
    
    const reducedImages = images.map((image, index) => (
        {
            id: index,
            src: image
        }
    ));

    return (
        <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
        //   <Modal
        //     images={reducedImages}
        //     onClose={() => {
        //       setLastViewedPhoto(photoId)
        //     }}
        //   />
            <div>MODAL</div>
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">

          {reducedImages.map(({ id, src}) => (
            <Link
              key={id}
              href={`${router.asPath}?photoId=${id}`}
              // as={`/p/${id}`}
            //   ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Michiel Roukens Portfolio Project Photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={src}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
    )
  }