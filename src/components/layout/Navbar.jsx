import React from 'react';
import styles from './Navbar.module.css';
import CartWithCountIcon from '../ui/CartWithCountIcon';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.pages}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
      </ul>
      <h3 className={styles.logo}>Gemluxe</h3>
      <ul className={styles.icons}>
        <li>
          <NavLink to='/cart'>
            <CartWithCountIcon count={5} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
