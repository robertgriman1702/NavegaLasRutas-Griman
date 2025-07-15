import { useEffect, useState } from "react";
import { getProductById } from "../Data/products";

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!productId) return;
        setLoading(true);
        getProductById(Number(productId))
            .then((data) => {
                setProduct(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [productId]);

    return {product, loading};
};

export default useProduct;