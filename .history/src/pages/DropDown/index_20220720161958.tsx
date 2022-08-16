
import Link from 'next/link';
import React from 'react';
import style from "../DropDown/dropDown.module.scss"

export default function DropDown() {
  return (
    <>
        <ul className={style.dropDown}>
            <li> <Link href="./">
                <a
                 >
                  Home
                </a>
              </Link></li>
            <li>Criação de loja online e-commerce</li>
            <li>Criação de logótipo</li>
            <li>Gestão e Manutenção de WebSites</li>
            <li>Gestão de Redes Sociais</li>
        </ul>
    </>
  )
}
