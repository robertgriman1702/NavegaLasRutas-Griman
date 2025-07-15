import React, { useState } from 'react';
import UseProducts from '../hooks/useproducts.js';


const HocFilterProducts = (Component) => {
    return function() {
        const [query, setQuery] = useState("");
        const { products, loading } = UseProducts();

        const ChangeInput = (event) => {
            setQuery(event.target.value.toLowerCase());
        };

        const search = (productsList) => {
            return productsList.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        };


        return (
            <>
                <div>
                    <input
                        type="text"
                        placeholder="buscar producto..."
                        onChange={ChangeInput}
                        style={{margin: "1rem", padding: "0.5rem"}}
                    />
                </div>
                <Component products={search(products)} />
            </>
        );
    };
};

export default HocFilterProducts;