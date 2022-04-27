import React from "react";

//import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

/*import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller"*/

const BannerCarrusel = () => {
  return (
    <div className="swipeContainer">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className="mySwiper"
      >
        <SwiperSlide className="swipSlide">
          <img
            src="https://i.ibb.co/dfXDwJg/Hotsale-Banner-Birbo.png"
            alt="Hotsale"
          />
          <div className="slideText">
            <h2>¡EL MEJOR FIN A LLEGADO!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipSlideBG">
          <img src="https://i.ibb.co/7SqGM96/book3.jpg" alt="Estilos" />
          <div className="slideText">
            <h3>Libretas hechas con el corazón ❤️</h3>
            <p>
              Hechas total y cuidadosamente con nuestras manos, 100%
              artesanales.
            </p>
            <Link to="#lineas">
              <button className="botonBanner">
                Conoce nuestras presentaciones
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipSlideBG">
          <img src="https://i.ibb.co/hMx4NZN/fondo4.jpg" alt="tres" />
          <div className="slideText">
            <h3>Para todos los estilos 🕶️</h3>
            <p>
              Selecciona entre todos las variedades, el que mejor se adapte a ti
              :)
            </p>
            <Link to="#lineas">
              <button className="botonBanner">¡Quiero verlos!</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
};

export default BannerCarrusel;
