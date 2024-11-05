// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css';

// eslint-disable-next-line react/prop-types
const Home = ({ slides }) => {
    return (
        <div>
            <h1 className="text-center my-4 home-title">REAL KING STORE</h1>

            <div className="text-background">
                <p className="text-center mb-4 introduction">
                    En REAL KING STORE, te ofrecemos una experiencia única donde la comodidad y el estilo se unen en cada paso.
                    Nuestra selección de zapatillas de las mejores marcas está diseñada para adaptarse a tu estilo de vida,
                    ya sea que busques un look casual o la mejor performance deportiva.
                </p>
            </div>

            <Carousel>
                {/* eslint-disable-next-line react/prop-types */}
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {slide.map((product) => (
                                <div className="col-md-3 mb-4" key={product.id}>
                                    <div className="card">
                                        <img src={product.image} className="card-img-top" alt={product.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.price}</p>
                                            <Link to={`/Producto/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="text-background">
                <p className="text-center mb-4 introduction">
                    Desde las últimas tendencias hasta los clásicos atemporales, cada par de zapatillas que ofrecemos
                    es una declaración de estilo y confort. Explora nuestra colección y encuentra el par perfecto para
                    acompañarte en cada aventura. ¡Descubre tu próximo par favorito hoy!
                </p>
            </div>

            <div className="text-background">
                <p className="text-center mb-4 introduction">
                    Además, no te pierdas nuestras increíbles ofertas y descuentos en productos seleccionados. ¡Mantente atento a nuestras novedades!
                </p>
            </div>

            <div className="offers-section text-center my-5">
                <h2 className="offers-title">Ofertas Especiales</h2>
                <div className="offers-images">
                    <img src="/Images/descuennntonike.jpeg" alt="Oferta 1" className="offer-image" />
                    <img src="/Images/deskuentoadida.jpeg" alt="Oferta 2" className="offer-image" />
                    <img src="/Images/niubalan.jpeg" alt="Oferta 3" className="offer-image" />
                </div>
                <p className="text-background mt-3">
                    Aprovecha nuestras ofertas limitadas en productos destacados. ¡Haz tu compra antes de que se agoten!
                </p>
            </div>
        </div>
    );
};

export default Home;
