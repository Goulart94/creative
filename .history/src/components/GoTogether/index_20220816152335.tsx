import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import style from "../GoTogether/style.module.scss"

export default function GoTogether() {
  return (
    <>
    <ScrollAnimation animateIn='fadeIn'
 animateOut='fadeOut' initiallyVisible={false}
 animateOnce={true}>
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
};
