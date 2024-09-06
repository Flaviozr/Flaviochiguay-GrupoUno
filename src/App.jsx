import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import newLogo1 from './assets/images/logo1.png';
import newLogo2 from './assets/images/logo2.png';
import newLogo3 from './assets/images/logo3.png';
import productImage1 from './assets/images/logo3.png'; // Asegúrate de tener estas imágenes
import productImage2 from './assets/images/logo1.png';
import productImage3 from './assets/images/logo2.webp';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <Carousel>
                    <Carousel.Item>
                        <a href="https://www.adidas.cl/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block w-100"
                                src={newLogo1}
                                alt="Adidas Logo"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://www.nike.cl/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block w-100"
                                src={newLogo2}
                                alt="Nike Logo"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://newbalance.cl/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block w-100"
                                src={newLogo3}
                                alt="New Balance Logo"
                            />
                        </a>
                    </Carousel.Item>
                </Carousel>

                <h1 className="text-center my-5">¡GRANDES MARCAS AL MEJOR PRECIO!</h1>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={productImage1} className="card-img-top" alt="Producto 1" />
                            <div className="card-body">
                                <h5 className="card-title">Producto 1</h5>
                                <p className="card-text">$29.99</p>
                                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={productImage2} className="card-img-top" alt="Producto 2" />
                            <div className="card-body">
                                <h5 className="card-title">Producto 2</h5>
                                <p className="card-text">$39.99</p>
                                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={productImage3} className="card-img-top" alt="Producto 3" />
                            <div className="card-body">
                                <h5 className="card-title">Producto 3</h5>
                                <p className="card-text">$49.99</p>
                                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>&copy; 2024 KING STORE. Todos los derechos reservados.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
