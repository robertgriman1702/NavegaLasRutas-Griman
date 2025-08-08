import React from 'react';
import './cartwidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/Cart" className="cart-widget">
      <div className="cart-icon-wrapper">
        <i className="bi bi-cart3"></i>
        <p>{totalQuantity()}</p>
      </div>
    </Link>
  );
};

export default CartWidget;