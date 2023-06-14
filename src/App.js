import React from 'react';
import styles from './App.module.css';
import NavBar from './components/layout/Navbar';
import HomeView from './pages/Home/HomeView';
import ShopView from './pages/Shop/ShopView';
import ProductView from './pages/Product/ProductView';
import CartView from './pages/Cart/CartView';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/shop' element={<ShopView />} />
        <Route path='/shop/:id' element={<ProductView />} />
        <Route path='/cart' element={<CartView />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
