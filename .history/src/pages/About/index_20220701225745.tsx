import React from "react";
import Values from "../../components/Values";
import style from "../About/style.module.scss";
import Typewriter from "typewriter-effect";
import Team from "../../components/Team";
import ButtomAbout from "../../components/buttomAbout/ButtomAbout";
import Footer from "../../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <>
      {/*Section One */}
      <section className={style.sectionOne}>
        <div className={style.containerText}>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Somos a Creative Web Design.")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Somos a Creative Web Design.")
                  .start();
              }}
            />
          </h1>
          <span>O futuro é digital. Junte-se a nós.</span>
        </div>
      </section>
      {/*Section Two */}
     
      <section className={style.sectionTwo}>
     
        <div className={style.containerUs}>
          <div className={style.containerImgTwo}>
            <img src="/images/aboutUs.jpg" alt="" />
          </div>
          <div className={style.containerTextTwo}>
        
            <span>Quem Somos </span>

            <h2>
              Especialistas em Websites, que tem como objetivo levar você e sua
              marca a um novo patamar.
            </h2>
            <p>
              Quem somos? Uma simples resposta seria, somos uma agência digital
              focada na criação de websites e lojas online. <br />
              <br />
              Nosso maior objetivo é a ajudar os empreenderes lançar os seus
              projetos no mundo digital, sabemos que o mundo digital não é o
              amanhã, e sim o agora! <br />
              <br />
              Temos a certeza que uma empresa com um bom website, é capaz de
              crescer mais rápido que as demais, e que cada vez mais isso é
              notório no nosso dia a dia.
              <br />
              <br />
              Então está esperando o que? Embarque conosco nessa jornada e venha
              conhecer esse novo mundo.🚀
            </p>
          
        </div>
        </div>
      </section>
      
      {/*Section tree */}
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
      <section className={style.sectionTree}>
        <Values></Values>
      </section>
      </ScrollAnimation>
     
      {/*Section Four */}
       <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
      <section className={style.sectionFour}>
        <div className={style.titleFour}>
          <h1>Equipa</h1>
        </div>
      </section>
      </ScrollAnimation>

      {/*Section Four */}
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
      <section className={style.sectionFive}>
        <div className={style.containerTextFive}>
          <h1>Let's work together ?</h1>
          <span>Temos a solução ideal para seu negócio.</span>
          <button>Contacte</button>
        </div>
      </section> 
      </ScrollAnimation>

       {/*Section Five */}
       <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
      <section className={style.sectionFive}>
        <div className={style.containerTextFive}>
          <h1>Let's work together ?</h1>
          <span>Temos a solução ideal para seu negócio.</span>
          <button>Contacte</button>
        </div>
      </section> 
      </ScrollAnimation>

       <Footer></Footer>
    </>
  );
}
