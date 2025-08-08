import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

     const addProductInCart = (newProduct) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(
                product => product.id === newProduct.id
            );
            if (existingProductIndex >= 0) {     
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + newProduct.quantity
                };
                return updatedCart;
            } else {
                return [...prevCart, newProduct];
            }
        });
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