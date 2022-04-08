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
            <h3>¡EL MEJOR FIN A LLEGADO!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7SqGM96/book3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hMx4NZN/fondo4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarrusel;

/*
<Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.ibb.co/dfXDwJg/Hotsale-Banner-Birbo.png"
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>¡EL MEJOR FIN A LLEGADO!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7SqGM96/book3.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption >
            <h3>Libretas hechas con el corazón ❤️</h3>
            <p>Hechas total y cuidadosamente con nuestras manos, 100% artesanales.</p>
            <Link>
            <button className="botonBanner">Conoce nuestras presentaciones</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hMx4NZN/fondo4.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption >
            <h3>Para todos los estilos</h3>
            <p>Selecciona entre todos las variedades, el que mejor se adapte a ti :)</p>
            <Link>
            <button className="botonBanner">¡Quiero verlos!</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
*/
