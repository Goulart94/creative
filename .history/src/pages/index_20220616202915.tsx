import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/home.module.scss';


const Home: NextPage = () => {
  return (
    <>
     

      <div className={style.ContainerSectionOne}>

        <div className={style.containerText}>
          <h1>Somos uma Agência de Marketing Digital</h1>
          <h3>Temos como missão levar sua a marca a todas as pessoas. </h3>
        </div>

      </div>
    </>
  )
}

export default Home
