import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i class="bi bi-backpack-fill"></i>
        <a href="#" className="navbar-logo">PEGAZO</a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#" className="nav-link">Inicio</a></li>
        <li><a href="#" className="nav-link">Combos</a></li>
        <li><a href="#" className="nav-link">Productos</a></li>
        <li><a href="#" className="nav-link">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;