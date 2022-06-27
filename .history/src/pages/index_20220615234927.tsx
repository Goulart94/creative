import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/home.module.scss';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T2M - web design</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap" rel="stylesheet"/>

      </Head>

      <div className={style.ContainerSectionOne}>

      </div>
    </>
  )
}

export default Home
