import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {RiFocus3Line, RiRunLine, RiRocketFill, RiChat1Fill, RiCoinsLine} from 'react-icons/ri';

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
              <RiFocus3Line className={style.icon}/><h2>Comprometimento</h2>
              <p>Temos o comprometimento com nossos clientes como uma de nossas maiores premissas, buscamos sempre entender e ajudar nossos parceiros em seus objetivos. </p>
             </div>
            </div>

            <div className={style.card}>
             <div className={style.ContentTitle}>
              <RiRunLine className={style.icon}/><h2>Agilidade</h2>
              <p>Como tudo na vida não podemos perder tempo, e o seu tempo é dinheiro.<br></br> Por isso ser ágil não é uma opção, e sim uma obrigação.     </p>
             </div>
            </div>

             <div className={style.card}>
             <div className={style.ContentTitle}>
              <RiRocketFill className={style.icon}/><h2>Inovação</h2>
              <p>Na área da tecnologia as coisas mudam constantemente e temos com dever nos manter atualizados. <br></br> Para sempre conseguirmos entregar Websites modernos e eficientes para nossos clientes.    </p>
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  className={style.caroselGrid}>
            <div className={style.card}>
              <div className={style.ContentTitle}>
                <RiChat1Fill className={style.icon}/><h2>Contato fácil</h2>
                <p>Por norma devemos está sempre disponíveis aos nossos clientes seja por e-mail, Telefone, WhatsApp ou qual outro canal de comunicação.     </p>
               </div>
              </div>

            <div className={style.card}>
            <div className={style.ContentTitle}>
                <RiCoinsLine className={style.icon}/><h2>Preço justo</h2>
                <p>Por norma devemos está sempre disponíveis aos nossos clientes seja por e-mail, Telefone, WhatsApp ou qual outro canal de comunicação.     </p>
               </div>
            </div>

            <div className={style.card}>
            <div className={style.ContentTitle}>
                <RiChat1Fill className={style.icon}/><h2>Contato fácil</h2>
                <p>Por norma devemos está sempre disponíveis aos nossos clientes seja por e-mail, Telefone, WhatsApp ou qual outro canal de comunicação.     </p>
               </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
     </div>
    </>
  );
}
