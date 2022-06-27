import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            <div className={style.card}></div>
            <div></div>
            <div></div>
        </SwiperSlide>
        <SwiperSlide>
            <div></div>
            <div></div>
            <div></div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
