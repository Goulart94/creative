import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import style from "../cardsService/cardsServices.module.scss";

export default function CardsService() {
  return (
    <> <ScrollAnimation animateIn='fadeIn'
    animateOut='fadeOut'>
      <div className={style.containerCards}>
        <div className={style.containerText}>
          <h2>Nossos principais serviços</h2>
          <span>Usamos as melhores tecnologias do mercado para causar uma experiência inesquecível ao seu cliente.</span>
        </div>
        <div className={style.contentcards}>
          <div className={style.cards}>

          </div>
          <div className={style.cards}>

          </div>
          <div className={style.cards}>
            
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </>
  );
}
