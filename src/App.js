import React, { useState } from 'react';
import './App.css'; // Global styles
import Header from './Header'; // Import your Header component
import Menu from './Menu'; // Import your Menu component
import Cart from './Cart'; // Import the Cart component
import { CartProvider } from './CartContext'; // Import the CartProvider
import Footer from "./Footer"

const menuItems = [
  {
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },{
    id: 1,
    name: 'Poha',
    price: 10,
    image: 'https://example.com/poha.jpg',
  },
  {
    id: 2,
    name: 'Dosa',
    price: 30,
    image: 'https://example.com/dosa.jpg',
  },
  // Add more menu items as needed
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const proceedToPayment = () => {
    // Implement payment logic here
    console.log('Proceeding to payment...');
  };
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Menu menuItems={menuItems} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          proceedToPayment={proceedToPayment}
        />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
