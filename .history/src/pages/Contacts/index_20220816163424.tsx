import React from 'react'
import style from "../Contacts/style.module.scss";
import Typewriter from "typewriter-effect";
import Footer from '../../components/Footer';
import WorkWhithUs from '../../components/workWhithUs';
import GoTogether from '../../components/GoTogether';

export default function Contacts() {
  return (
    <>
      {/*Section One */}
      <section className={style.sectionOne}>
        <div className={style.containerText}>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Contacte-nos")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Contacte-nos")
                  .start();
              }}
            />
          </h1>
          <span>Retornaremos o seu contacto em breve.</span>
        </div>
      </section>
    
      {/*Section Two */}

      <section className={style.sectionTwo}>
        <div className={style.containerContact}>
          <h2>Pedir Orçamento</h2>
          <label htmlFor="name">Nome</label><br />
          <input className={style.ContainerInput} type="text" id='name' placeholder='nome'></input>
        </div>
      </section>
      <GoTogether></GoTogether>
      <Footer></Footer>
   </>
  )
}
