// Cart.js
import React from 'react';
import './Cart.css'; // Add your cart-specific styles

const Cart = ({ cartItems, removeFromCart, proceedToPayment }) => {
  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <button className="proceed-to-payment" onClick={proceedToPayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Cart;
