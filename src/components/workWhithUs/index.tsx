import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import style from "../workWhithUs/workWhithUs.module.scss"

export default function WorkWhithUs() {
  return (
   <>
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

   </>
  )
}
