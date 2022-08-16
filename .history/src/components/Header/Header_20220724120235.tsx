import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import style from "../Header/style.module.scss";

export default function Header() {
  const [nav, setNav] = useState(false);
  const { asPath } = useRouter();

  return (
    <header className={`${style.headerContainer}`}>
      <div  className={`${style.containerLogo} ${style["scale-up-ver-top"]}`}>
        <img src="/images/logotipo.png" alt="logo" />
      </div>
      <div className={`${style.containerNav} ${style['scale-up-ver-top']}`}>
        <nav>
          <ul className={style.listNav}>
            <li>
              <Link href="./">
                <a
                  className={asPath === "/" ? `${style.active}` : ""}
                  onClick={() => setNav(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="./About">
                <a
                  className={asPath === "/About" ? `${style.active}` : ""}
                  onClick={() => setNav(false)}
                >
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="./#Products">
                <a
                  className={asPath === "/#Products" ? `${style.active}` : ""}
                  onClick={() => setNav(false)}
                >
                  Serviços  <AiFillCaretDown className={style.icon}></AiFillCaretDown>
                </a>
               
              </Link>
              <ul className={style.dropDown}>
                <li>
                <Link href="./#Products"><a>Criação de WebSites</a></Link>
                </li>
                <li>
                  <a>Criação de loja online Ecommerce</a>
                </li>
                <li>
                  <a>Criação de logótipo</a>
                </li>
                <li>
                  <a>Gestão e Manutenção de WebSites</a>
                </li>
                <li>
                  <a>Gestão de Redes Sociais</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <Link href="./Contacts">
                <a
                  className={asPath === "/Contacts" ? `${style.active}` : ""}
                  onClick={() => setNav(false)}
                >
                  Contatos
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
