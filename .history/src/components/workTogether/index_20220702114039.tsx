import React from 'react';
import style from "../workTogether/workTogether.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";



export default function WorkTogether() {
  return (
    <>
    <section className={style.container}>
        <h1>O que nos torna únicos</h1>
        <div className={style.containerCenter}>

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={style.caroselGrid}
      >
        <SwiperSlide className={style.containerCarosel}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={style.containerCarosel}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
   
      </Swiper>
          
        </div>
  
    </section>
    </>
  )
}
