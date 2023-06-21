import React from 'react';
import IconShopping from './IconShopping';
import styles from './CartWithCountIcon.module.css';

const CartWithCountIcon = ({ cartCount }) => {
  return (
    <div className={styles.icon}>
      <IconShopping className={styles.icon__cart} />
      <span className={styles.icon__count}>{cartCount}</span>
    </div>
  );
};

export default CartWithCountIcon;
