import React from "react";
import style from "../Footer/style.module.scss";

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
                   Gondomar-Porto
                </p>
            </div>
            <div className={style.containerContact}></div>
        </div>
        <div className={style.contentBotton}></div>
      </footer>
    </>
  );
}
