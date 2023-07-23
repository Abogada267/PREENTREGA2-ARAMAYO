/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel

function ExampleCarouselImage(props) {
  return (
    <Carousel>
      <Carousel.Item>
        {/* Contenido del carrusel, por ejemplo, mostrar la imagen */}
        <img src="./src/assets/img/Modelodedemanda.png" alt="" />
        {/* Puedes agregar más contenido aquí, como títulos, descripciones, etc. */}
        <Carousel.Caption>
          <h3>{props.text}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Contenido del carrusel, por ejemplo, mostrar la imagen */}
        <img src="/ruta-de-la-imagen" alt="" />
        {/* Puedes agregar más contenido aquí, como títulos, descripciones, etc. */}
        <Carousel.Caption>
          <h3>{props.text}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Contenido del carrusel, por ejemplo, mostrar la imagen */}
        <img src="/ruta-de-la-imagen" alt="" />
        {/* Puedes agregar más contenido aquí, como títulos, descripciones, etc. */}
        <Carousel.Caption>
          <h3>{props.text}</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ExampleCarouselImage;
