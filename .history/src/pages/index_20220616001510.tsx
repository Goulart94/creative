import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/home.module.scss';


const Home: NextPage = () => {
  return (
    <>
     

      <div className={style.ContainerSectionOne}>

        <div className={style.containerText}>
          <h1>T2M Web Design</h1>
        </div>

      </div>
    </>
  )
}

export default Home