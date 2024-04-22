// Menu.js
import React from 'react';
import './Menu.css'; // Import your menu-specific styles

const Menu = ({ menuItems, addToCart }) => {
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
