import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import style from '../header/style.module.scss';


export default function Header() {

  const[nav, setNav] =useState(false);
  const {asPath} = useRouter();


  return (
    <header className={`${style.headerContainer} ${style['scale-up-ver-top']}`}>
      <div className={style.containerLogo}>
              <img src="/images/logotipo" alt="logo" />
      </div>
      <div className={style.containerNav  }>
        <nav>
        <Link href='./'><a className={asPath === '/' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Home</a></Link>
        <Link href='./About'><a className={asPath === '/About' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Sobre</a></Link>
        <Link href='./Products'><a className={asPath === '/Products' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Produtos</a></Link>
        <Link href='./Contacts'><a className={asPath === '/Contacts' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Contatos</a></Link>
        </nav>

      </div>
     

    </header>
  )
}

