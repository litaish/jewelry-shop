import React from 'react';
import styles from './App.module.css';
import NavBar from './components/layout/Navbar';
import HomeView from './pages/Home/HomeView';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <HomeView />
      <Footer />
    </div>
  );
};

export default App;
