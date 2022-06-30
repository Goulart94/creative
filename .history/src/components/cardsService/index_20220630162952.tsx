import React from 'react'
import style from "../cardsService/cardsServices.module.scss"

export default function CardsService() {
  return (
    <>
     <div className={style.containerCards}>
   
      <div className={style.contentcards}>
      <h2>Nossos principais serviços</h2>
       <div className={style.cards}></div>
       <div className={style.cards}></div>
       <div className={style.cards}></div>
      </div> 
     </div>

    </>
  )
}
