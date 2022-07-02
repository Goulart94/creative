import React from 'react';
import style from "../workTogether/workTogether.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';



export default function WorkTogether() {
  return (
    <>
    <section className={style.container}>
        <h1>Porque escolher trabalhar connosco</h1>
        <div className={style.containerCenter}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >

        
        </SwiperSlide>
        <SwiperSlide >
          
        </SwiperSlide>
      
      </Swiper>
        </div>
  
    </section>
    </>
  )
}
