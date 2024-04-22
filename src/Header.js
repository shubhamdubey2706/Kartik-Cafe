// Header.js
import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kartik Cafe</div>
      <input type="text" placeholder="Search for food..." />
      <div className="cart-icon">🛒</div>
    </header>
  );
};

export default Header;
