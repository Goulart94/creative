import React from 'react';
import style from '../Team/style.module.scss'

export default function Team() {
  return (
  <div className={style.containerTeam}>
    <div className={style.ContentOne}>
        <div><img src="../../../public/images/team1.jpg" alt="" /></div>
    </div>
    <div className={style.ContentTwo}></div>
    <div className={style.containerTree}></div>

  </div>
  )
}
