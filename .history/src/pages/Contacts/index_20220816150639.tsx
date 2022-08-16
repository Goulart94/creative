import React from 'react'
import style from "../Contacts/style.module.scss";
import Typewriter from "typewriter-effect";

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
     
   </>
  )
}
