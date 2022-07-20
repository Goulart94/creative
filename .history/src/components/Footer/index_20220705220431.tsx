import React from "react";
import style from "../Footer/style.module.scss";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";


export default function Footer() {
  return (
    <>
     <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut' initiallyVisible={false}
  animateOnce={true}>
      <footer className={style.containerFooter}>
        <div className={style.contentTop}>
            <div className={style.containerLogo}>
                <img src="/images/logotipo.png" alt="logo" />
            </div>
            <div className={style.containerAddress}>
                <h2>Onde estamos</h2>
                <p>Rua de Tradinhade 169 <br></br>
                   Gondomar-Porto <br></br>
                   <BsFacebook className={style.icon}/> <BsInstagram  className={style.icon}/>
                </p>
            </div>
            <div className={style.containerContact}>
               <div>
                <h2>Telefone</h2>
                <span>(+351) 22245-6275</span>
               </div>
               <div>
                <h2>Email</h2>
                <span>Criative@teste.com</span>
               </div>
            </div>
        </div>
        <div className={style.contentBotton}>
            <div>
                <span>Copyright © 2022 Creative Web Design</span>
            </div>
            <div>
                <span>Website by  Creative Web Design</span>
            </div>
        </div>
      </footer>
      </ScrollAnimation>
    </>
  );
}
