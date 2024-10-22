import { getProducts } from '../Data/asyncMock';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item.jsx';
import { getProducts } from '../src/Data/asyncMock.jsx';

    const Itemlist = () => {
        const [products, setProducts] = useState([])

        useEffect(() => {
            getProducts().then((data) => {
                setProducts(data);

            });
        }, []);
    };

    export default Itemlist;



