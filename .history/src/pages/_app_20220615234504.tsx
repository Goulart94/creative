import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    < ChakraProvider>
    <Head>

    </Head>
      <Header/>
     <Component {...pageProps} />
    </ ChakraProvider>
  )
}

export default MyApp
