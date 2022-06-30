import React from 'react';
import style from './style.module.scss';

export default function ButtomAbout() {
  return (
   <button className={style.btnAbout} onClick={()=>window.location.href="./About"}>Saiba mais</button>
  )
}
