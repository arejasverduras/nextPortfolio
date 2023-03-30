import '@/styles/globals.css'
// deps
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// types
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page)=> page);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])
  
  return getLayout(
    <>
    <AnimatePresence
      initial={false}
      onExitComplete={() =>   
      {setTimeout(() => {
        if (!router.asPath.includes('#'))
       window.scrollTo(0, 0)
      }, 0);}
      }
      >    
          <Component {...pageProps} key={router.asPath}/>
    </AnimatePresence>
    <AnimatePresence
      >
      {loading && (
        // <Loading />
        <p style={{position: 'fixed', bottom: 0, right: 0}}>Loading..</p>
      )}
    </AnimatePresence>
  </>

    )
}
