import React from 'react';
import Header from '../../components/ui/Header';
import styles from './CartView.module.css';
// import CartItemTable from './CartItemTable';
// import CartItem from './CartItem';
import EmptyCartMessage from './EmptyCartMessage';

const CartView = () => {
  return (
    <div className={styles.container}>
      <Header title="Cart"/>
      {/* <CartItemTable>
        <CartItem />
      </CartItemTable> */}
      <EmptyCartMessage />
    </div>
  );
};

export default CartView;
