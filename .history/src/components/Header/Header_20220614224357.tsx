import React from 'react';
import style from '../header/style.module.scss';
import { Grid, GridItem } from '@chakra-ui/react'

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.containerLogo}>
              <img src="../../../public/imgs/logo.svg" alt="logo" />
      </div>
      <div className={style.containerNav}>
        

      </div>
     

    </header>
  )
}
