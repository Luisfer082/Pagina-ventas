import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselFadeExample.css'

function CarouselFadeExample() {
  return (
    <div className='conteiner '>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/3747434/pexels-photo-3747434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Decora tus paredes con arte único y personalizado</h3>
          <p>Mira nuestra gran variedad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Enciende la inspiración en tus paredes con nuestros cuadros únicos y exclusivos.</h3>
          <p>¿varieda? Ya no busques mas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Encuadra tus momentos favoritos con nosotros.</h3>
          <p>
            La vida contada en un cuadro
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default CarouselFadeExample;
