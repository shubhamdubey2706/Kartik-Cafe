import React from 'react';
import './Menu.css'; // Import your CSS file

const Menu = ({ menuItems, addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Call the addToCart function to update cartItems
  };

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-price">Price: {item.price}</p>
          </div>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

