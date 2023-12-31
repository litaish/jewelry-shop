// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import styles from './App.module.css';
import NavBar from './components/layout/Navbar';
import HomeView from './pages/Home/HomeView';
import ShopView from './pages/Shop/ShopView';
import ProductView from './pages/Product/ProductView';
import CartView from './pages/Cart/CartView';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, amount) => {
    const itemMatch = cart.find((element) => element.id == item.id);
    // If item is found, add amount to that item
    if (itemMatch) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((i) => {
          if (i.id === itemMatch.id) {
            return { ...i, amount: i.amount + amount };
          }
          return i;
        });
        return [...updatedCart];
      });
      // If item is not found, add a new item to cart with amount property
    } else {
      setCart((prevCart) => [...prevCart, { ...item, amount: amount }]);
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== itemToRemove.id);
    });
  };

  const handleChangeAmount = (item, value) => {
    const parsedValue = parseInt(value, 10);

    if (parsedValue === item.amount) {
      return; // No need to update state if the value hasn't changed
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.map((i) => {
        if (i.id === item.id) {
          return { ...i, amount: parsedValue };
        }
        return i;
      });
      return updatedCart;
    });
  };

  return (
    <div className={styles.layout}>
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/shop' element={<ShopView />} />
        <Route path='/shop/:id' element={<ProductView handleAddToCart={handleAddToCart} />} />
        <Route
          path='/cart'
          element={
            <CartView
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleChangeAmount={handleChangeAmount}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
