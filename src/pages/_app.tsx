import '@/styles/globals.css'
import '@/styles/readme.css'
// deps
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// comps
import { Loading } from '@/components/Loading/Loading';
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
  const [theme, setTheme] = useState('light');

  const compRef = useRef(null);

  const scrollTop = () => {
    window.scrollTo({top: 0,left: 0, behavior: "smooth"});
  }

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setTimeout(() => {
        setLoading(false)
      }, 400);
      setTimeout(() => {
        scrollTop();
      }, 200);
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

  // useEffect(()=>{
  //   if (!loading ) {

  //   }
  // },[loading])
  
  return getLayout(
    <>
    <AnimatePresence
      initial={false}
      mode="wait"
      // onExitComplete={() => scrollTop()}
      >    
          <Component {...pageProps} key={router.route} theme={theme} setTheme={setTheme} ref={compRef}/>
    </AnimatePresence>
    <AnimatePresence
      >
      {loading && (
        <Loading />
      )}
    </AnimatePresence>
  </>
    )
}
