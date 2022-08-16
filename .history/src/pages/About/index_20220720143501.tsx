import React from "react";
import Values from "../../components/Values";
import style from "../About/style.module.scss";
import Typewriter from "typewriter-effect";
import Team from "../../components/Team";
import ButtomAbout from "../../components/buttomAbout/ButtomAbout";
import Footer from "../../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import WorkWhithUs from "../../components/workWhithUs";

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
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        initiallyVisible={false}
        animateOnce={true}
      >
        <section className={style.sectionTree}>
          <Values></Values>
        </section>
      </ScrollAnimation>

      {/*Section Four */}
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        initiallyVisible={false}
        animateOnce={true}
      >
        <section className={style.sectionFour}>
          <div className={style.titleFour}>
            <h1>Equipa</h1>
          </div>
          <div className={style.containerTeam}>
            <div className={style.team}>
              <div className={style.cardTeamMaycon}>
                <div className={style.containerImgTeam}>
                  <img src="/images/team/maycon.jpg" alt="" />
                </div>
                <div className={style.containerTextTeam}>
                  <h3>Maycon Goulart</h3>
                  <p>
                    “O que fazemos é ajudar as pessoas, seja através do desenvolvimento de projetos ou com até mesmo um sorriso. Não somos uma empresa de tecnologia apenas. ”
                  </p>
                  <h4>CEO / Developer</h4>
                </div>
              </div>

              <div className={style.cardTeamTalita}>
                <div className={style.containerImgTeam}>
                  <img src="/images/team/talita.jpg" alt="" />
                </div>
                <div className={style.containerTextTeam}>
                  <h3>Talita Soares</h3>
                  <p>
                    “É muito melhor adaptar a tecnologia ao usuário do que força o usuário a se adaptar à tecnologia. ”
                  </p>
                  <h4>Design UX/UI </h4>
                </div>
              </div>

              <div className={style.cardTeamRafael}>
                <div className={style.containerImgTeam}>
                  <img src="/images/team/rafa.jpg" alt="" />
                </div>
                <div className={style.containerTextTeam}>
                  <h3>Rafael Moreira</h3>
                  <p>
                  “ Os primeiros 90% do código representam os primeiros 10% do tempo de desenvolvimento. Os 10% restantes do código é para mostrar aos outros os 90% do tempo de desenvolvimento. “
                  </p>
                  <h4>Developer</h4>
                </div>
              </div>

              <div className={style.cardTeamTais}>
                <div className={style.containerImgTeam}>
                  <img src="/images/team/tais.jpg" alt="" />
                </div>
                <div className={style.containerTextTeam}>
                  <h3>Taís Soares </h3>
                  <p>
                  “ É melhor que a experiência do cliente esteja no topo da sua lista quando se trata de prioridades em sua organização. A experiência do cliente é o novo marketing. ”
                  </p>
                  <h4>Customer client manager</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/*Section Four */}

      <WorkWhithUs></WorkWhithUs>
      <Footer></Footer>
    </>
  );
}
