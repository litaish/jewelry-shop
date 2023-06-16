import React from 'react';
import styles from './CartNotification.module.css';
import checkmark from '../../assets/images/icons/checkmark.png';
import close from '../../assets/images/icons/close.png';

const CartNotification = () => {
  return (
    <div className={styles.container}>
      <img src={checkmark} alt="Checkmark" />
      <p className={styles.msg}>Item has been added to your cart!</p>
      <button className={styles.cart__action}>View cart</button>
      <button className={styles.close}>
        <img src={close} alt="Close" />
      </button>
    </div>
  );
};

export default CartNotification;