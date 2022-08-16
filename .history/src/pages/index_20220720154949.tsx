import type { NextPage } from "next";
import Head from "next/head";
import ButtomAbout from "../components/buttomAbout/ButtomAbout";
import style from "../styles/home.module.scss";
import Typewriter from "typewriter-effect";
import CardsService from "../components/mainServices";
import Footer from "../components/Footer";
import WorkWhithUs from "../components/workWhithUs";
import WorkTogether from "../components/workTogether";
import ScrollAnimation from "react-animate-on-scroll";
import MainServices from "../components/mainServices";
import CommitmentServices from "../components/CommitmentServices";
 

const Home: NextPage = () => {
  
  return (
    <>
      {/*Section-One */}
      <section className={style.ContainerSectionOne}>
        <div className={style.containerText}>
          <h1>Agência de Marketing Digital Creative
            Soluções em WebDesign</h1>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "Temos como missão levar sua marca a todas as pessoas"
                  )

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Temos como missão levar sua marca a todas as pessoas"
                  )
                  .start();
              }}
            />
    
          </span>
          <div className={style.containerBtm}>
            <ButtomAbout />
          </div>
        </div>
      </section>
     
      <main className={style.containerMain}> 
       {/*Section-two */}
        <section id="Products" className={style.containerServices}>
          <MainServices/>
        </section>

        {/*Section-there */}
        <section className={style.containerWorkTogether}>
           <WorkTogether></WorkTogether>
        </section>

          {/*Section-for */}
          <section className={style.containerServices}>
         <CommitmentServices></CommitmentServices>
        </section>

         {/*Section-for */}
        
         <section className={style.containerfive}>
        
          <div className={style.sectionFive}>
            <div className={style.title}>
                 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}
  animateOnce={true}>
               <h1>
                "Nossa missão é levar você e sua marca para todo o mundo."
              </h1>          </ScrollAnimation>
            </div> 
          </div>

        </section>



      </main>
    

      <Footer></Footer>

    </>
  );
};

export default Home;
