import React from "react";
import Slider from "react-slick";
import "../styles/Carrusel.css";

export default function Carrusel() {
    const images = [
        "/img/Foto1.jpg",
        "/img/Foto2.jpg",
        "/img/Foto3.jpg",
        "/img/Foto4.jpg",


    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id="galeria" className="carrusel-container">
            <h2>Nuestros Clientes</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carrusel-slide">
                        <img src={image} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </section>
    );
}
