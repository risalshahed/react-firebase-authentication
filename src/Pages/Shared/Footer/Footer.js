import React from 'react';
import './Footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className='footer'>
        <p>Contact</p>
        <p><strong>copyright © {year} </strong></p>
    </footer>
  );
};

export default Footer;