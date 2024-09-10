import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import newLogo1 from './assets/images/logo1.png';
import newLogo2 from './assets/images/nikekek.png';
import newLogo3 from './assets/images/newbakalala.jpg';
import productImage1 from './assets/images/ZAPAS1.jpg';
import productImage2 from './assets/images/imagen 5.jpeg';
import productImage3 from './assets/images/imagen 6.jpeg';
import productImage4 from './assets/images/imagen4.jpeg';
import productImage5 from './assets/images/ZAPAS2.jpg';
import productImage6 from './assets/images/ZAPAS3.jpeg';
import productImage7 from './assets/images/ZAPAS4.jpeg';
import productImage8 from './assets/images/ZAPAS5.jpg';
import productImage9 from './assets/images/ZAPAS6.jpeg';
import productImage10 from './assets/images/ZAPAS7.jpeg';
import productImage11 from './assets/images/ZAPAS8.jpg';
import productImage12 from './assets/images/ZAPAS9.jpeg';
import productImage13 from './assets/images/ZAPAS10.jpeg';
import productImage14 from './assets/images/ZAPAS11.jpeg';

function App() {
    const products = [
        { id: 1, image: productImage1, title: 'Zapatillas adidas VL Court 3.0', price: '$60.990' },
        { id: 2, image: productImage2, title: 'Zapatillas Nike Dunk Low Viotech', price: '$211.990' },
        { id: 3, image: productImage3, title: 'Zapatillas Urbanas Hombre New Balance 9060 Morada', price: '$80.990' },
        { id: 4, image: productImage4, title: 'Zapatillas Urbanas Hombre New Balance Ml574evb Negro', price: '$52,990' },
        { id: 5, image: productImage5, title: ' Zapatillas Nike Air Max 90', price: '$130.990' },
        { id: 6, image: productImage6, title: 'Zapatillas Forum Low', price: '$80.990' },
        { id: 7, image: productImage7, title: 'Zapatillas New Balance 550 White Green Men', price: '$80.990' },
        { id: 8, image: productImage8, title: 'Zapatillas Nike Full Force Low', price: '$74.990' },
        { id: 9, image: productImage9, title: 'Zapatillas Nike Air Max Dn', price: '$120.990' },
        { id: 10, image: productImage10, title: 'Zapatillas Adidas Handball Spezial Originals', price: '$89.990' },
        { id: 11, image: productImage11, title: 'Zapatillas Nike Gamma Force', price: '$90.990' },
        { id: 12, image: productImage12, title: 'Zapatilla New Balance 725 Unisex Negro', price: '$89.990'},
        { id: 13, image: productImage13, title: 'Zapatillas Nike Journey Run', price: '$79.990' },
        { id: 14, image: productImage14, title: 'Adidas Zapatillas Gazelle Chile Originals', price: '$59.990' }
    ];
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
                            DESCUBRE lAS MEJORES MARCAS Y PRODUCTOS CON NOSOTROS. NOS ESPECIALIZAMOS EN OFRECER LO ULTIMO
                            EN ZAPATILLAS DE LAS MARCAS MAS RECONOCIDAS COMO ADIDAS,NEW BALANCE Y NIKE.
                        </p>
                    </div>

                    <div className="carousel-logo">
                        <Carousel interval={3000}>
                            <Carousel.Item>
                                <img className="d-block w-100" src={newLogo1} alt="Adidas Logo" />
                                <Carousel.Caption>
                                    <h3>Adidas</h3>
                                    <p>Descubre lo mejor de Adidas</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={newLogo2} alt="Nike Logo" />
                                <Carousel.Caption>
                                    <h3>Nike</h3>
                                    <p>Explora los productos de Nike</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={newLogo3} alt="New Balance Logo" />
                                <Carousel.Caption>
                                    <h3>New Balance</h3>
                                    <p>Descubre las novedades de New Balance</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                    <h1 className="text-center my-5">¡GRANDES MARCAS AL MEJOR PRECIO!</h1>
                        <div className="product-carousel">
                            <Carousel interval={5000} indicators={false} controls={true}>
                                {slides.map((slide, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="row">
                                            {slide.map((product) => (
                                          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                            <div className="card shadow-sm border-0">
                                                <img src={product.image} className="card-img-top product-img" alt={product.title} />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{product.title}</h5>
                                                    <p className="card-text">{product.price}</p>
                                                    <button className="btn btn-primary">Comprar</button>
                                                    <button className="btn btn-outline-secondary ms-2">Añadir al carrito</button>
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
