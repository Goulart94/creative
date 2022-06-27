import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    < ChakraProvider>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap" rel="stylesheet"/>

    </Head>

      <Header/>
     <Component {...pageProps} />
    </ ChakraProvider>
  )
}

export default MyApp
