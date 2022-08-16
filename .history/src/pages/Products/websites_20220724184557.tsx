import React from "react";
import style from "../Products/style.module.scss";

export default function WebSites() {
  return (
    <>
      {/* 
      ---------------------------------------------------------------------------------------------------------------
      SECTION ONE
      ---------------------------------------------------------------------------------------------------------------
      */}
      <div className={`${style.sectionOne} ${style["backgrundWebSites"]}`}>
        <div className={style.containerTextOne}>
          <h1>Criação de WebSites</h1>
          <span>
            Crie o seu WebSite seja ele um blog, informativo ou Institucional e
            leve os seus valores a todos.
          </span>
        </div>
      </div>
      {/* 
      ---------------------------------------------------------------------------------------------------------------
      SECTION TWO
      ---------------------------------------------------------------------------------------------------------------
      */}
      <div className={style.sectionTwo}>
        <div className={style.containerTextTwo}>
          <h2>Seu WebSite</h2>
          <div>
            Se sua marca não tiver uma presença online, ela não vai atrair
            milhares de potenciais clientes que pesquisam na internet por
            produtos ou serviços como os seus. Da consultoria ao desenho, do
            desenvolvimento à gestão de conteúdos do seu site, a Creative
            garante-lhe uma plataforma robusta e capaz de gerar mais vendas.
          </div>
        </div>

        <div className={style.containerForm}>
          <div className={style.containerBecause}>
            <div className={style.div1}>
              <img src="/images/iconMore.png" alt="" />
              <div>
                 <span>Alcance</span><br></br><br></br> Disponibilize os seus produtos ou serviços para qualquer
                potencial cliente, 24 sobre 24 horas e a partir de qualquer
                lugar!
              </div>
            </div>
            <div className={style.div2}>
            <img src="/images/iconMore.png" alt="" />
              <div>
                 <span>Alcance</span><br></br><br></br> Disponibilize os seus produtos ou serviços para qualquer
                potencial cliente, 24 sobre 24 horas e a partir de qualquer
                lugar!
              </div>
            </div>
            <div className={style.div3}>
            <img src="/images/iconMore.png" alt="" />
              <div>
                 <span>Alcance</span><br></br><br></br> Disponibilize os seus produtos ou serviços para qualquer
                potencial cliente, 24 sobre 24 horas e a partir de qualquer
                lugar!
              </div>
            </div>
            <div className={style.div4}>
            <img src="/images/iconMore.png" alt="" />
              <div>
                 <span>Alcance</span><br></br><br></br> Disponibilize os seus produtos ou serviços para qualquer
                potencial cliente, 24 sobre 24 horas e a partir de qualquer
                lugar!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
