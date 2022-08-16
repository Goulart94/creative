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
                <span>Alcance</span>
                <br></br>
                <br></br> Disponibilize os seus produtos ou serviços para
                qualquer potencial cliente, 24 sobre 24 horas e a partir de
                qualquer lugar!
              </div>
            </div>
            <div className={style.div2}>
              <img src="/images/iconMore.png" alt="" />
              <div>
                <span>Alcance</span>
                <br></br>
                <br></br> Disponibilize os seus produtos ou serviços para
                qualquer potencial cliente, 24 sobre 24 horas e a partir de
                qualquer lugar!
              </div>
            </div>
            <div className={style.div3}>
              <img src="/images/iconMore.png" alt="" />
              <div>
                <span>Alcance</span>
                <br></br>
                <br></br> Disponibilize os seus produtos ou serviços para
                qualquer potencial cliente, 24 sobre 24 horas e a partir de
                qualquer lugar!
              </div>
            </div>
            <div className={style.div4}>
              <img src="/images/iconMore.png" alt="" />
              <div>
                <span>Alcance</span>
                <br></br>
                <br></br> Disponibilize os seus produtos ou serviços para
                qualquer potencial cliente, 24 sobre 24 horas e a partir de
                qualquer lugar!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      ---------------------------------------------------------------------------------------------------------------
      SECTION THREE
      ---------------------------------------------------------------------------------------------------------------
      */}
      <div className={style.sectionThree}>
        <div className={style.containerTextThree}>
          <div className={style.titleThree}>
            <h2>Porque deves investir em um WebSite</h2>
          </div>
          <div className={style.mainThree}>
            <div>
              <img src="/images/pc.png" alt="" />
            </div>
            <div className={style.textMainThree}>
              <p>
                {" "}
                Uma loja online está sempre aberta e pronta para vender,
                dispensa funcionários para efetuar a venda com isso diminuindo o
                seu custo. O alcance da sua loja passa a ser muito maior e com
                isso consegue ganhar novos clientes. Hoje em dia não se trata
                mais de um luxo ter uma loja online para o seu negocio e sim uma
                necessidade, em pleno século XXI um negoc- io para crescer e
                alcançar seus objetivos por padrão ele tem que está online. Uma
                loja online se traduz basicamente como baixo custo e chances de
                grandes ganhos, não deixe sua ideia ou produto guardado em sua
                mente leve isso para o mundo e melhor maneira de fazer isso com
                uma loja online.
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* 
      ---------------------------------------------------------------------------------------------------------------
      SECTION THREE
      ---------------------------------------------------------------------------------------------------------------
      */}
      <div className={style.sectionFour}>

      <div className={style.titlefour}>
            <h2>Porque deves investir em um WebSite</h2>
          </div>

          <div className={style.textFour}>

          </div>
      </div>
    </>
  );
}
