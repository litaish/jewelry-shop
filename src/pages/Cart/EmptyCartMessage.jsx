import React from 'react';
import styles from './EmptyCartMessage.module.css';
import CartButton from './CartButton';
import warning from '../../assets/images/icons/warning.png';

const EmptyCartMessage = () => {
  return (
    <>
        <div className={styles.message}>
            <img src={warning} alt="Warning" />
            <p>Your cart is currently empty</p>
        </div>
        <CartButton text="Return to shop"/>
    </>
  );
};

export default EmptyCartMessage;
