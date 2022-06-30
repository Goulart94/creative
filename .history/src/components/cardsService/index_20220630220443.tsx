import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import style from "../cardsService/cardsServices.module.scss";

export default function CardsService() {
  return (
    <>
      {" "}
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className={style.containerCards}>
          <div className={style.containerText}>
            <h2>Nossos principais serviços</h2>
            <span>
              Usamos as melhores tecnologias do mercado para causar uma
              experiência inesquecível ao seu cliente.
            </span>
          </div>
          <div className={style.contentcards}>
            <div className={style.cards}>
              <div className={style.containerIcon}>
                <div className={style.boxImage}>
                  <img src="images/svg/iconWebsite.svg" alt="" />
                </div>
              </div>

              <div className={style.textcard}>
                <div>
                  <h2>Criação de Website</h2>
                  <p>
                    O Principal foco da nossa empresa é a criação de websites
                    modernos e apelativos que fazem a sua marca atingir o máximo
                    de pessoas possíveis.
                  </p>
                </div>
              </div>

              <div className={style.containerButton}>
                <div>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>

            <div className={style.cards}>
              <div className={style.containerIcon}>
                <div className={style.boxImage}>
                  <img src="images/svg/iconRedesSocias.svg" alt="" />
                </div>
              </div>

              <div className={style.textcard}>
                <div>
                  <h2>Criação de Website</h2>
                  <p>
                    O Principal foco da nossa empresa é a criação de websites
                    modernos e apelativos que fazem a sua marca atingir o máximo
                    de pessoas possíveis.
                  </p>
                </div>
              </div>

              <div className={style.containerButton}>
                <div>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>
            <div className={style.cards}>
              <div className={style.containerIcon}>
                <div className={style.boxImage}>
                  <img src="images/svg/iconCriacaoLogo.svg" alt="" />
                </div>
              </div>

              <div className={style.textcard}>
                <div>
                  <h2>Criação de Website</h2>
                  <p>
                    O Principal foco da nossa empresa é a criação de websites
                    modernos e apelativos que fazem a sua marca atingir o máximo
                    de pessoas possíveis.
                  </p>
                </div>
              </div>

              <div className={style.containerButton}>
                <div>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
