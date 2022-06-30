import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DropDown from "../DropDown";
import style from "../Header/style.module.scss";

export default function Header() {
  const [nav, setNav] = useState(false);
  const { asPath } = useRouter();

  return (
    <header className={`${style.headerContainer} ${style["scale-up-ver-top"]}`}>
      <div className={style.containerLogo}>
        <img src="/images/logotipo.png" alt="logo" />
      </div>
      <div className={style.containerNav}>
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
              <Link href="./Products">
                <a
                  className={asPath === "/Products" ? `${style.active}` : ""}
                  onClick={() => setNav(false)}
                >
                  Serviços
                </a>
              </Link>
              <DropDown></DropDown>
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
