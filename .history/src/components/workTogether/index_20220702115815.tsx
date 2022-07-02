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
import { RiFocus3Line, RiRunLine } from 'react-icons/ri';



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
        <div className={style.card}>
             <div className={style.ContentTitle}>
              <RiFocus3Line className={style.icon}/><h2>Comprometimento</h2>
              <p>Temos o comprometimento com nossos clientes como uma de nossas maiores premissas, buscamos sempre entender e ajudar nossos parceiros em seus objetivos. </p>
             </div>
            </div>

     
        </SwiperSlide>
        <SwiperSlide className={style.containerCarosel}>
        <div className={style.card}>
             <div className={style.ContentTitle}>
              <RiRunLine className={style.icon}/><h2>Agilidade</h2>
              <p>Como tudo na vida não podemos perder tempo, e o seu tempo é dinheiro.<br></br> Por isso ser ágil não é uma opção, e sim uma obrigação.     </p>
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.containerCarosel}>
        <div className={style.card}>
             <div className={style.ContentTitle}>
              <RiRocketFill className={style.icon}/><h2>Inovação</h2>
              <p>Na área da tecnologia tudo muda constantemente e temos como dever nos manter atualizados. <br></br> Para que sempre conseguirmos entregar Websites modernos e eficientes para nossos clientes.    </p>
             </div>
            </div>
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
