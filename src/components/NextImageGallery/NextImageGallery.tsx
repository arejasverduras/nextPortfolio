import styledJsx from './NextImageGallery.styles';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
    mobileImages?: Array<string | GalleryImage>,
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

  export const NextImageGallery = ({images, mobileImages, prefix,style}:NextImageGalleryProps) => {
    const [photoId, setPhotoId] = useState<number | null>(null);
    const [useMobileCollection, setUseMobileCollection] = useState(false);
    const useMobileCollectionRef = useRef(false);
    const galleryEntryOpen = useRef(false);
    const galleryPageUrl = useRef('');

    useEffect(() => {
      galleryPageUrl.current = window.location.href;
      const onBackOrForward = (event: PopStateEvent) => {
        const gallery = event.state?.portfolioGallery;
        const isThisGallery = gallery?.prefix === prefix;
        if (window.location.href !== galleryPageUrl.current || (!galleryEntryOpen.current && !isThisGallery)) return;

        // This is a local overlay transition, not a Next.js page navigation.
        event.stopImmediatePropagation();
        galleryEntryOpen.current = isThisGallery;
        setPhotoId(isThisGallery ? gallery.photoId : null);
      };
      window.addEventListener('popstate', onBackOrForward, true);
      return () => window.removeEventListener('popstate', onBackOrForward, true);
    }, [prefix]);

    const changePhoto = (id: number | null) => {
      if (id === null) {
        if (galleryEntryOpen.current) window.history.back();
        else setPhotoId(null);
        return;
      }
      const state = {...window.history.state, portfolioGallery: {prefix, photoId: id}};
      if (galleryEntryOpen.current) {
        window.history.replaceState(state, '', window.location.href);
      } else {
        galleryPageUrl.current = window.location.href;
        window.history.pushState(state, '', window.location.href);
        galleryEntryOpen.current = true;
      }
      setPhotoId(id);
    };

    useEffect(() => {
      if (photoId !== null && galleryEntryOpen.current) {
        window.history.replaceState({
          ...window.history.state,
          portfolioGallery: {prefix, photoId},
        }, '', window.location.href);
      }
    }, [photoId, prefix]);

    useEffect(() => {
      if (!mobileImages?.length) {
        useMobileCollectionRef.current = false;
        setUseMobileCollection(false);
        return;
      }

      const mediaQuery = window.matchMedia('(max-width: 600px)');

      const updateCollection = () => {
        const shouldUseMobileCollection = mediaQuery.matches;

        if (useMobileCollectionRef.current !== shouldUseMobileCollection) {
          useMobileCollectionRef.current = shouldUseMobileCollection;
          setUseMobileCollection(shouldUseMobileCollection);
          setPhotoId((currentPhotoId) => currentPhotoId === null ? null : 0);
        }
      };

      updateCollection();
      mediaQuery.addEventListener('change', updateCollection);

      return () => mediaQuery.removeEventListener('change', updateCollection);
    }, [mobileImages]);

    const activeImages = useMobileCollection && mobileImages?.length
      ? mobileImages
      : images;
    
    const reducedImages = activeImages.map((image, index) => ({
        id: index,
        ...(typeof image === 'string' ? { src: image } : image),
    }));

    const limitedImages = reducedImages.slice(1, 5).map(({id, src, alt}, index) => {
        const showRemainingCount = id === 4 && reducedImages.length > 4;

        return (
          <motion.button
              type="button"
              key={id}
              onClick={()=>{changePhoto(id)}}
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
              setPhotoId={changePhoto}
              prefix={prefix}
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          className={`${styledJsx.className} firstImageContainer`}
          onClick={()=>{changePhoto(reducedImages[0].id)}}
          role="button"
          tabIndex={0}
          aria-label={`Open project image 1 of ${reducedImages.length}`}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              changePhoto(reducedImages[0].id);
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
