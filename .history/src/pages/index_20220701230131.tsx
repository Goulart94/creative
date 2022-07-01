import type { NextPage } from "next";
import Head from "next/head";
import ButtomAbout from "../components/buttomAbout/ButtomAbout";
import style from "../styles/home.module.scss";
import Typewriter from "typewriter-effect";
import CardsService from "../components/cardsService";

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
        {/*Section-two */}
      <section className={style.containerSectionTwo} >
        <div className={style.containerServices}>
          <CardsService/>

        </div>

      </section>
         {/*Section-there */}
         <section className={style.containerSectionTher} >
        <div className={style.containerServices}>
        
        </div>

      </section>
    </>
  );
};

export default Home;
