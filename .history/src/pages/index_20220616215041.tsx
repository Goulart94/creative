import type { NextPage } from 'next';
import Head from 'next/head';
import ButtomAbout from '../components/buttomAbout/ButtomAbout';
import style from '../styles/home.module.scss';
import Typewriter from "typewriter-effect";


const Home: NextPage = () => {
  return (
    <>
     

      <div className={style.ContainerSectionOne}>

        <div className={style.containerText}>
          <h1>Somos uma Agência de Marketing Digital</h1>
          <span><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Temos como missão levar sua a marca a todas")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("")
  .start();
  }}
  />Temos como missão levar sua a marca a todas as pessoas. </span>
          <div className={style.containerBtm}><ButtomAbout/></div>
        </div>

      </div>
    </>
  )
}

export default Home