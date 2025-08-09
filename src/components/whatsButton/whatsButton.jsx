import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import './whatsbutton.css';

const WhatsButton = () => {
    const phoneNumber = "+584244085004"; 
  return (
    <div>
      <a href={`https://wa.me/${phoneNumber}`} className="whatsapp-icon-container" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" />
      </a>
      
    </div>
  )
}

export default WhatsButton
