import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {
    const { cart, deleteProductById } = useContext(CartContext);
    const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    return (
      <div className="cart-container">
        <h1 className="cart-title">Tu Carrito de Compras</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-message">Tu carrito está vacío</p>
            <Link to="/" className="continue-shopping">Continúa comprando</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((productCart) => ( 
                <div key={productCart.id} className="cart-item">
                  <img 
                    src={productCart.image} 
                    alt={productCart.name} 
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h2 className="cart-item-name">{productCart.name}</h2>
                    <p className="cart-item-price">Precio: ${productCart.price}</p>
                    <p className="cart-item-quantity">Cantidad: {productCart.quantity}</p>
                    <p className="cart-item-subtotal">Subtotal: ${productCart.price * productCart.quantity}</p>
                  </div>
                  <button 
                    onClick={() => deleteProductById(productCart.id)}
                    className="delete-btn"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <p className="cart-total">Total de la compra: ${cart.reduce((total, product) => total + (product.price * product.quantity), 0)}</p>
              <Link to="/checkout" className="checkout-btn">
                Continuar con la compra
              </Link>
            </div>
          </>
        )}
      </div>
    );
};

export default Cart;
