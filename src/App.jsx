import  React ,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { fetchProducts } from './Data/asyncMock.jsx';
function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    const itemsPerSlide = 4;
    const slides = [];

    for (let i = 0; i < products.length; i += itemsPerSlide) {
        slides.push(products.slice(i, i + itemsPerSlide));
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container mt-5">
                <div className="row main-layout">
                    <div className="information-section">
                        <h2>BIENVENIDO A LA TIENDA DEL REY</h2>
                        <p>
                            Descubre las mejores marcas y productos con nosotros. Nos especializamos en ofrecer lo último en
                            zapatillas de las marcas más reconocidas como Adidas, New Balance y Nike.
                        </p>
                    </div>
                </div>
                <h1 className="text-center my-5">¡Grandes marcas al mejor precio!</h1>
                <div className="product-carousel">
                    <Carousel interval={5000} indicators={false} controls={true}>
                        {slides.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <div className="row">
                                    {slide.map((product) => (
                                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                            <div className="card shadow-sm border-0">
                                                <img
                                                    src={product.image}
                                                    className="card-img-top product-img"
                                                    alt={product.title}
                                                />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{product.title}</h5>
                                                    <p className="card-text">{product.price}</p>
                                                    <button className="btn btn-primary">Comprar</button>
                                                    <button className="btn btn-outline-secondary ms-2">
                                                        Añadir al carrito
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
