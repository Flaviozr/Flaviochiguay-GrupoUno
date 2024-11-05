import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Marcas.css';
const Marcas = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center display-4 my-4">Nuestras Marcas</h1>
            <p className="text-center fs-5 mb-4">
                Aquí puedes encontrar distintos tipos de zapatillas de marcas reconocidas como Adidas, New Balance y Nike.
            </p>

            <div className="row align-items-center">
                {/* Sección de texto a la izquierda */}
                <div className="col-md-3 text-md-end text-center mb-4">
                    <h4 className="fw-bold">Variedad de Marcas</h4>
                    <p className="fs-6">Explora una amplia variedad de zapatillas de marcas top del mercado. Encuentra el estilo que va contigo.</p>
                </div>

                {/* Carrusel de imágenes en el centro */}
                <div className="col-md-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Images/adidas%20logo.jpg"  // Cambia esta ruta a la imagen de Adidas
                                alt="Adidas"
                            />
                            <Carousel.Caption>
                                <h5>Adidas</h5>
                                <p>Encuentra los últimos modelos de Adidas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Images/nikelgogo.png"  // Cambia esta ruta a la imagen de Nike
                                alt="Nike"
                            />
                            <Carousel.Caption>
                                <h5>Nike</h5>
                                <p>Descubre la comodidad y el estilo de Nike.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Images/New_Balance_logo.svg.png"  // Cambia esta ruta a la imagen de New Balance
                                alt="New Balance"
                            />
                            <Carousel.Caption>
                                <h5>New Balance</h5>
                                <p>Estilo y soporte en cada paso.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Sección de texto a la derecha */}
                <div className="col-md-3 text-md-start text-center mb-4">
                    <h4 className="fw-bold">Para cada Estilo</h4>
                    <p className="fs-6">Ya sea para entrenamiento, correr o uso diario, tenemos las zapatillas perfectas para ti.</p>
                </div>
            </div>
        </div>
    );
};

export default Marcas;
