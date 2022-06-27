import React from 'react';
import style from '../header/style.module.scss';


export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.containerLogo}>
              <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className={style.containerNav}>
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Produtos</a>
          <a href="">Contatos</a>
        </nav>

      </div>
     

    </header>
  )
}
