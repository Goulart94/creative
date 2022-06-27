import React from 'react';
import style from '../header/style.module.scss';
import { Grid, GridItem } from '@chakra-ui/react'

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.containerLogo}>
              <img src="./public/imgs/Ativo 1.png" alt="logo" />
      </div>
      <div className={style.containerNav}>
        

      </div>
     

    </header>
  )
}
