import Link from 'next/dist/client/link';
import React from 'react';
import style from "../DropDown/dropDown.module.scss"

export default function DropDown() {
  return (
    <>
        <ul className={style.dropDown}>
            <a href="./Products"><li>Criação de WebSites</li></a>
            <li>Criação de loja online e-commerce</li>
            <li>Criação de logótipo</li>
            <li>Gestão e Manutenção de WebSites</li>
            <li>Gestão de Redes Sociais</li>
        </ul>
    </>
  )
}
