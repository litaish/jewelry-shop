import React from 'react';
import styles from './Navbar.module.css';
import CartWithCountIcon from '../ui/CartWithCountIcon';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.pages}>
        <li>Home</li>
        <li>Shop</li>
      </ul>
      <h3 className={styles.logo}>Gemluxe</h3>
      <ul className={styles.icons}>
        <li>
          <CartWithCountIcon count={5} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
