import React from 'react';
import './footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Pegazo. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a 
          href="https://wa.me/[+584244085004]" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaWhatsapp className="footer-icon" />
          WhatsApp
        </a>
        <a 
          href="https://www.instagram.com/pegazo_ve?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
        >
          <FaInstagram className="footer-icon" />
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;