import React from 'react';
import IconShopping from './IconShopping';
import styles from './CartWithCountIcon.module.css';

const CartWithCountIcon = ({ count }) => {
  return (
    <div className={styles.icon}>
      <IconShopping className={styles.icon__cart} />
      <span className={styles.icon__count}>{count}</span>
    </div>
  );
};

export default CartWithCountIcon;
