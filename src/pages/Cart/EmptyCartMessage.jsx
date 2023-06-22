import React from 'react';
import styles from './EmptyCartMessage.module.css';
import CartButton from './CartButton';
import warning from '../../assets/images/icons/warning.png';
import { Link } from 'react-router-dom';

const EmptyCartMessage = () => {
  return (
    <>
      <div className={styles.message}>
        <img src={warning} alt='Warning' />
        <p>Your cart is currently empty</p>
      </div>
      <Link to='/shop'>
        <CartButton text='Return to shop' />
      </Link>
    </>
  );
};

export default EmptyCartMessage;
