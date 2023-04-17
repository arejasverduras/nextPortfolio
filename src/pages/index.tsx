import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
// components
import PageLayout from '@/Layouts/PageLayout/PageLayout';
import { Hints } from '@/components/Hints/Hints';
import { Input } from '@/components/Input/Input';
import { Message } from '@/components/Message/Message';
// types
import {ReactElement} from 'react';
import type { NextPageWithLayout } from './_app'

const inter = Inter({ subsets: ['latin'] })

const Home:NextPageWithLayout = () => {
  const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState(<></>);
    const [showMessage, setShowMessage] = useState(false);
   
    const toggleVisible = () => {
        setVisible(!visible);
      }
  
    const animations = {
    headerAppear: {
        opacity: [0,1],
        transition: {delay: 0.4}
    },
    headerDisappear: {
        opacity: [1,0],
        transition: {delay: 0}
    },
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.top}>
            <AnimatePresence
                mode="wait">
                {!visible && (<motion.h1
                    key="header1"
                    variants={animations}
                    animate="headerAppear"
                    exit="headerDisappear"
                    >
                        click
                        </motion.h1>
                    )}
                    {visible && (<motion.h1
                    key="header2"
                    variants={animations}
                    animate="headerAppear"
                    exit="headerDisappear"
                    >
                        Enter command
                    </motion.h1>)}
            </AnimatePresence>
        </div>
        <div className={styles.inputContainer}>
            <Input 
                visible={visible}
                toggleVisible={toggleVisible}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setMessage={setMessage}
                setShowMessage={setShowMessage}
                />
        </div>
        <AnimatePresence>
          {visible && (
            <motion.div 
              className={styles.hints}
              key="hintsHolder"
              animate={{opacity: [0,1], y: [20,0]}}
              transition={{delay: 1.2}}
              layout
              >
                <Hints 
                    setSearchTerm={setSearchTerm}
                    setShowMessage={setShowMessage}
                    />
            </motion.div>
          )}
         </AnimatePresence>
         <Message 
            message={message}
            showMessage={showMessage}
            />
    </main>
    </>
  )
}

Home.getLayout = function getLayout(page:ReactElement) {
  return (
      <PageLayout home>
          {/* optional nested layout component */}
          {page}
      </PageLayout>
  )
}

export default Home;