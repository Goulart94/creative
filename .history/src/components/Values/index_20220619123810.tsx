import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {RiFocus2Line} from 'react-icons/ri';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from './style.module.scss'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Values() {
  return (
    <>
   <div className={style.title}>
    <h1>Nossos Valores</h1>
   </div> 
   <div className={style.containerCarosel}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={style.caroselGrid}>

            <div className={style.card}>
             <div className={style.ContentTitle}>
            <h2>  <RiFocus2Line className={style.icon}/>Comprometimento</h2>
             </div>
            </div>

            <div className={style.card}></div>
            <div className={style.card}></div>
        </SwiperSlide>
        <SwiperSlide  className={style.caroselGrid}>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
        </SwiperSlide>
      
      </Swiper>
     </div>
    </>
  );
}
