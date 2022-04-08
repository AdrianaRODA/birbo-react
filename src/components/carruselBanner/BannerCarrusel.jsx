import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const BannerCarrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/dfXDwJg/Hotsale-Banner-Birbo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>¡EL MEJOR FIN A LLEGADO!</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7SqGM96/book3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Libretas hechas con el corazón ❤️</h3>
            <p>Hechas total y cuidadosamente con nuestras manos, 100% artesanales.</p>
            <Link to="/">
            <button className="botonBanner">Conoce nuestras presentaciones</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hMx4NZN/fondo4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Para todos los estilos</h3>
            <p>
            Selecciona entre todos las variedades, el que mejor se adapte a ti :)
            </p>
            <Link to="/">
            <button className="botonBanner">¡Quiero verlos!</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarrusel;

