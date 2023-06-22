import React from 'react';
import styles from './CartButton.module.css';

const CartButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default CartButton;
