import React from 'react';
import CartWidget from '../Cartwidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <i className="bi bi-backpack-fill"></i>
          <p className="navbar-logo">PEGAZO</p>
        </div>
      </Link>
      
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/category/combos" className="nav-link">Combos</Link>
        </li>
        <li>
          <Link to="/category/products" className="nav-link">Productos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;