import React from 'react';
import style from '../header/style.module.scss';
import { SimpleGrid } from '@chakra-ui/react';

export default function Header() {
  return (
    <header className={style.headerContainer}>
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>

    </header>
  )
}
