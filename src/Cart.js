import React from 'react';
import './Cart.css'; // Add your cart-specific styles

const Cart = ({ cartItems, removeFromCart, proceedToPayment, setCartItems }) => {
  const removeItem = (itemToRemove) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const removeAllItems = () => {
    setCartItems([]); // Remove all items
  };

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <button className="proceed-to-payment" onClick={proceedToPayment}>
            Proceed to Payment
          </button>
          <button className="remove-all-items" onClick={removeAllItems}>
            Remove All Items
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
