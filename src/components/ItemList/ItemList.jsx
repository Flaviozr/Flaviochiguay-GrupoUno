// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from "../../data/Zapatillas.jsx";
import './ItemList.css';

const ItemList = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1); // Estado para el contador

    useEffect(() => {
        fetchProducts().then((products) => {
            const foundProduct = products.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false);
        });
    }, [id]);

    const incrementarCantidad = () => setCantidad(cantidad + 1);
    const decrementarCantidad = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    if (loading) {
        return <p>Cargando...</p>;
    }
    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div className="Itemlist-container">
            <h1>Detalles del Producto</h1>
            <img src={product.image} alt={product.title} className="img-fluid" />
            <h2>{product.title}</h2>
            <p>Precio: {product.price}</p>

            {/* Sección del contador */}
            <div className="contador">
                <button onClick={decrementarCantidad} className="btn btn-outline-secondary">-</button>
                <span className="cantidad">{cantidad}</span>
                <button onClick={incrementarCantidad} className="btn btn-outline-secondary">+</button>
            </div>

            <button className="btn btn-primary">Añadir {cantidad} al Carrito</button>
        </div>
    );
};

export default ItemList;
