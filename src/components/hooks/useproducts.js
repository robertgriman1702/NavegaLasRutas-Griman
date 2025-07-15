import { useEffect, useState } from "react";
import {getProducts} from "../Data/products.js";

const UseProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        getProducts()
        .then((data) => {
            if (category) {
                const producFilter = data.filter((product)=> product.category === category);
                setProducts(producFilter);
            } else {
                setProducts(data);
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }, [category]);

    return {products, loading};
}

export default UseProducts;