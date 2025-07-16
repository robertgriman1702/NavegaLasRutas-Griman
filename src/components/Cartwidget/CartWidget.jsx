import React from 'react';
import './cartwidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <div className="cart-icon-wrapper">
        <i className="bi bi-cart3"></i>
        <span className="cart-counter"></span>
      </div>
    </div>
  );
};

export default CartWidget;