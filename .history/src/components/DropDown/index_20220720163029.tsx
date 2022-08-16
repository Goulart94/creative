
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
import style from "../DropDown/dropDown.module.scss"

export default function DropDown() {
  return (
    <>
        <ul className={style.dropDown}>
            <li><a href="https://trello.com/b/BFjBRHzV/servi%C3%A7os-certificados-ssl">Criação de WebSites</a></li>
            <li>Criação de loja online e-commerce</li>
            <li>Criação de logótipo</li>
            <li>Gestão e Manutenção de WebSites</li>
            <li>Gestão de Redes Sociais</li>
        </ul>
    </>
  )
}
