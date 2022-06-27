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
        <Link href='./About'><a className={asPath === '/About' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Sobre</a></Link>
        <Link href='./Products'><a className={asPath === '/Products' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Produtos</a></Link>
        <Link href='./Contacts'><a className={asPath === '/Contacts' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Contatos</a></Link>
        </nav>

      </div>
     

    </header>
  )
}
function setNav(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

