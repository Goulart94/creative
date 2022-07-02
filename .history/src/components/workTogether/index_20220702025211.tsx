import React from 'react';
import style from "../workTogether/workTogether.module.scss";
import Values from "../../components/Values"


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
              <p>Na área da tecnologia tudo muda constantemente e temos como dever nos manter atualizados. <br></br> Para que sempre conseguirmos entregar Websites modernos e eficientes para nossos clientes.    </p>
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  className={style.caroselGrid}>
            <div className={style.card}>
              <div className={style.ContentTitle}>
                <RiChat1Fill className={style.icon}/><h2>Contato fácil</h2>
                <p>Por norma devemos está sempre disponíveis aos nossos clientes seja por e-mail, Telefone, WhatsApp ou qualquer outro canal de comunicação.     </p>
               </div>
              </div>

            <div className={style.card}>
            <div className={style.ContentTitle}>
                <RiCoinsLine className={style.icon}/><h2>Preço justo</h2>
                <p>Cobramos um preço justo por todos os nossos trabalhos, nunca buscamos prejudicar nossos parceiros e clientes.  </p>
               </div>
            </div>

            <div className={style.card}>
            <div className={style.ContentTitle}>
                <RiMentalHealthLine className={style.icon}/><h2>Social</h2>
                <p>Sabemos a importância de cada um no mundo e por isso uma parte de nossos lucros são convertidos em ajuda para a comunidade.  </p>
               </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
        </div>
  
    </section>
    </>
  )
}
