// Items.jsx
import React, { useEffect, useState } from 'react';
import { getProductById } from '../../data/asyncMock.jsx';
import { useNavigate } from 'react-router-dom';

const Items = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };
        loadProducts();
    }, []);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="container">
            <h2 className="text-center my-4">Zapatillas Disponibles</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary" onClick={() => handleProductClick(product.id)}>
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
