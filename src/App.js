import React, { useEffect, useState } from 'react';
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
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(calculateCartTotal());
  },[cart]);

  const calculateCartTotal = () => {
    return cart.reduce((sum, currentItem) => {
      return sum + (Number(currentItem.price) * Number(currentItem.amount));
     }, 0);
  }

  const handleAddToCart = (item, amount) => {
    const itemMatch = cart.find(element => element.id == item.id);
    // If item is found, add amount to that item 
    if (itemMatch) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
          if (item.id === itemMatch.id) {
            return {...item, amount: item.amount + amount};
          }
          return item;
        });
        return updatedCart;
      })
    // If item is not found, add a new item to cart with amount property
    } else {
      setCart(prevCart => [...prevCart, {...item, amount: amount}])
    }
  }

  const handleRemoveFromCart = (itemToRemove) => {
    setCart(prevCart => {
      return prevCart.filter(item => item.id !== itemToRemove.id);
    })
  }

  return (
    <div className={styles.layout}>
        <NavBar cartCount={cart.length}/>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/shop' element={<ShopView />} />
          <Route path='/shop/:id' element={<ProductView handleAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={<CartView cart={cart} cartTotal={cartTotal} handleRemoveFromCart={handleRemoveFromCart}/>} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
