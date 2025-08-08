import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (product) => {
        setCart([...cart, product]);
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0);
        return total;
    }

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((product) => product.id !== id);
        setCart(productsFilter);
    }

    return (
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, deleteProductById}}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };