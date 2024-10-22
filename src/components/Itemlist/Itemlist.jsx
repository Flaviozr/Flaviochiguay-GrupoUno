import Item from "../Item/Item.jsx";
import { getProducts } from "src/Data/asyncMock.jsx";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading.jsx";

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-wrap my-[30px]">
            {products.map((prod) => (
                <Item {...prod} key={prod.id} />
            ))}
        </div>
    );
}
