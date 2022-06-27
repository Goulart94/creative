import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    < ChakraProvider>
      <Header/>
     <Component {...pageProps} />
    </ ChakraProvider>
  )
}

export default MyApp
