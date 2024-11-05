// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from "../../data/Zapatillas.jsx";

const Item = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-3" key={product.id}>
                    <div className="card">
                        <img src={product.image} alt={product.title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.price}</p>
                            <Link to={`/Producto/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Item;
