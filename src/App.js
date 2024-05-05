import './App.css'; // Global styles
import Header from './Header';  
import { CartProvider } from './CartContext'; // Import the CartProvider
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'; 
import Cart from './Cart'; // Import the Cart component
import Menu from './Menu'; // Import the Menu component
 
import Footer from "./Footer" 
const App = () => { 
  const [cartItems, setCartItems] = useState([]); // Initialize cart state
  const menuItems = [{ id: 1, name: 'Burger', price: 99 },
  { id: 2, name: 'Pizza', price: 100 },
  { id: 3, name: 'Sandwich', price: 40 },
  { id: 4, name: 'Dosa', price: 50 },
  { id: 5, name: 'Idli', price: 30 },
  { id: 6, name: 'Chai', price: 10 }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };  

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const proceedToPayment = () => {
    console.log('Proceeding to payment...');
  };
  return (
    <CartProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Menu menuItems={menuItems} addToCart={addToCart} />} />
      <Route path="/cart" element={<div className="cart-items">
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems} // Pass setCartItems function
          removeFromCart={removeFromCart}
          proceedToPayment={proceedToPayment}
        />
      </div>} />
    </Routes>
    <Footer/>
   </BrowserRouter> 
  </CartProvider>
  );
};

export default App;
 