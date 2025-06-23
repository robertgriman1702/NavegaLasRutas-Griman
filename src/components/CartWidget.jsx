import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-search"></i>
      <div className="cart-icon-wrapper">
        <i className="bi bi-cart3"></i>
        <span className="cart-counter"></span>
      </div>
    </div>
  );
};

export default CartWidget;