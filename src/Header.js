
// Header.js
import React, { useState } from 'react';
import './Header.css'; // Import your CSS file 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Cart from './Cart'; // Import the Cart component

const Header = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cart state

  return (
    <header className="header">
      <Link to="/" className="logo">Kartik Cafe</Link>
      <input type="text" placeholder="Search for food..." />
      <Link to="/cart" className="cart-icon">
        🛒 ({cartItems.length})
      </Link>
    </header>
  );
};

export default Header;
