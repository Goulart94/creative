import React from "react";
import style from "../Footer/style.module.scss";
import {BsFacebook, BsInstagram} from "react-icons/bs";


export default function Footer() {
  return (
    <>
      <footer className={style.containerFooter}>
        <div className={style.contentTop}>
            <div className={style.containerLogo}>
                <img src="/images/png/logo4.png" alt="logo" />
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
        <div className={style.contentBotton}></div>
      </footer>
    </>
  );
}
