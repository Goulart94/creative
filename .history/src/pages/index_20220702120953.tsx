import type { NextPage } from "next";
import Head from "next/head";
import ButtomAbout from "../components/buttomAbout/ButtomAbout";
import style from "../styles/home.module.scss";
import Typewriter from "typewriter-effect";
import CardsService from "../components/cardsService";
import Footer from "../components/Footer";
import WorkWhithUs from "../components/workWhithUs";
import WorkTogether from "../components/workTogether";
import ScrollAnimation from "react-animate-on-scroll";

const Home: NextPage = () => {
  return (
    <>
      {/*Section-One */}
      <section className={style.ContainerSectionOne}>
        <div className={style.containerText}>
          <h1>Somos uma Agência de Marketing Digital</h1>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "Temos como missão levar sua marca a todas as pessoas."
                  )

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Temos como missão levar sua marca a todas as pessoas."
                  )
                  .start();
              }}
            />
            .
          </span>
          <div className={style.containerBtm}>
            <ButtomAbout />
          </div>
        </div>
      </section>
     
      <main className={style.containerMain}> 
       {/*Section-two */}
        <section className={style.containerServices}>
          <CardsService />
        </section>

        {/*Section-there */}
        <section className={style.containerWorkTogether}>
           <WorkTogether></WorkTogether>
        </section>

      </main>
      <WorkWhithUs></WorkWhithUs>

      <Footer></Footer>

    </>
  );
};

export default Home;