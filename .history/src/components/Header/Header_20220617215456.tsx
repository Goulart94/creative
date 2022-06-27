import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import style from '../header/style.module.scss';


export default function Header() {

  const[nav, setNav] =useState(false);
  const {asPath} = useRouter();


  return (
    <header className={style.headerContainer}>
      <div className={style.containerLogo}>
              <img src="/images/png/logo4.png" alt="logo" />
      </div>
      <div className={style.containerNav}>
        <nav>
        <Link href='./'><a className={asPath === '/' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Home</a></Link>
          <a href="">Sobre</a>
          <a href="">Produtos</a>
          <a href="">Contatos</a>
        </nav>

      </div>
     

    </header>
  )
}
function setNav(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

