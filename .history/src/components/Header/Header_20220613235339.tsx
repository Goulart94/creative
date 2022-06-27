import React from 'react';
import style from '../header/style.module.scss';
import { Grid, GridItem } from '@chakra-ui/react'

export default function Header() {
  return (
    <header className={style.headerContainer}>
    <Grid templateColumns='repeat(12, 1fr)' gap={6}>
    <GridItem colSpan={6} w='100%' h='20' bg='blue.500'>
        <h1>ola</h1>
    </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' />
    
  </Grid>

    </header>
  )
}
