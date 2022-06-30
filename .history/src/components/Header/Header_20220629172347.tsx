import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import style from '../Header/style.module.scss';



export default function Header() {

  const[nav, setNav] =useState(false);
  const {asPath} = useRouter();


 

  return (
 
    <header className={`${style.headerContainer} ${style['scale-up-ver-top']}`}>
      <div className={style.containerLogo}>
              <img src="/images/logotipo.png" alt="logo" />
      </div>
      <div className={style.containerNav  }>
        <nav>
        <Link href='./'><a className={asPath === '/' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Home</a></Link>
        <Link href='./About'><a className={asPath === '/About' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Sobre</a></Link>
        <Link href='./Products'><a className={asPath === '/Products' ? `${style.active}` : ''} onClick={()=>setNav(false)}><DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton></a></Link>
        <Link href='./Contacts'><a className={asPath === '/Contacts' ? `${style.active}` : ''} onClick={()=>setNav(false)}>Contatos</a></Link>
        </nav>

      </div>
     

    </header>
   
  )
}

