import React from 'react';
import style from '../About/style.module.scss';

export default function About() {
  return (
    <>
     <section className={style.sectionOne}>
      <div className={style.containerText}>
        <h1>Somos a T2M Web Design</h1>
        <span>O futuro é digital. Junte-se a nós.</span>
      </div>
      </section>
      <section className={style.sectionTwo}>
        <div className={style.containerUs}>

          <div className={style.containerImgTwo}>
            <img src="/images/aboutUs.jpg" alt="" />
          </div>
          <div className={style.containerTextTwo}>
          
          <span>Quem Somos </span> 

         <h2>Especialistas em Websites, que tem como objetivo levar você e sua marca a um novo patamar.</h2>  
          <p>
          Quem somos? Uma simples resposta seria, somos uma agência digital focada na criação de websites e lojas online. <br/><br/>

          Nosso maior objetivo é a ajudar os empreenderes lançar os seus projetos no mundo digital, sabemos que o mundo digital não é o amanhã, e sim o agora! <br/><br/>

          Temos a certeza que uma empresa com um bom website, é capaz de crescer mais rápido que as demais, e que cada vez mais isso é notório no nosso dia a dia.<br/><br/>    

          Então está esperando o que?  Embarque conosco nessa jornada e venha conhecer esse novo mundo.   

          </p>
          </div>
        
        </div>
      </section>
    </>
   
  )
}
