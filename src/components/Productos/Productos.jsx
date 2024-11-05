// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { fetchProducts } from "../../data/Zapatillas.jsx";
import './Productos.css';

const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">Colección Exclusiva de REAL KING STORE</h1>
            <p className="text-center">
                Descubre las mejores zapatillas para cada estilo y ocasión. En REAL KING STORE,
                seleccionamos cuidadosamente cada modelo para ofrecerte la máxima calidad y comodidad.
                Desde las últimas tendencias urbanas hasta los clásicos atemporales, aquí encontrarás
                el calzado perfecto para destacar.
            </p>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href={`/Producto/${product.id}`} className="btn btn-primary">Ver Detalles</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
