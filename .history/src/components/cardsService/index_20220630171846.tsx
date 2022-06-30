import React from "react";
import style from "../cardsService/cardsServices.module.scss";

export default function CardsService() {
  return (
    <>
      <div className={style.containerCards}>
        <div className={style.containerText}>
          <h2>Nossos principais serviços</h2>
          <span>Usamos as melhores tecnologias do mercado para causar uma experiência inesquecível ao seu cliente.</span>
        </div>
        <div className={style.contentcards}>
          <div className={style.cards}></div>
          <div className={style.cards}></div>
          <div className={style.cards}></div>
        </div>
      </div>
    </>
  );
}
