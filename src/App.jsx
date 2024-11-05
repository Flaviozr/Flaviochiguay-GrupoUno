// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { fetchProducts } from './data/Zapatillas.jsx';
import Home from './Components/Home/Home.jsx';
import Marcas from './Components/Marcas/Marcas.jsx';
import Adultos from './Components/Adultos/Adultos.jsx';
import Ninos from './Components/Ninos/Ninos.jsx';
import Productos from './Components/Productos/Productos.jsx';
import ItemList from './Components/ItemList/ItemList.jsx';
import Item from "./Components/Item/Item.jsx";
import './App.css';

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
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="container mt-5">
                    <Routes>
                        <Route path="/Home" element={<Home slides={slides} />} />
                        <Route path="/Marcas" element={<Marcas />} />
                        <Route path="/Adultos" element={<Adultos />} />
                        <Route path="/Ninos" element={<Ninos />} />
                        <Route path="/Productos" element={<Productos />} />
                        <Route path="/Item" element={<Item />} />
                        <Route path="/Producto/:id" element={<ItemList />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
