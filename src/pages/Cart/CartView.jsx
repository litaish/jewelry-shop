import React from 'react';
import Header from '../../components/ui/Header';
import styles from './CartView.module.css';
import CartItemTable from './CartItemTable';
import CartItem from './CartItem';
import EmptyCartMessage from './EmptyCartMessage';

const CartView = ({ cart }) => {
  let view;

  if (cart.length > 0) {
    view = 
      <CartItemTable>
        <CartItem />
      </CartItemTable>
      
  } else {
    view = <EmptyCartMessage />
  }

  return (
    <div className={styles.container}>
      <Header title="Cart"/>
      {view}
    </div>
  );
};

export default CartView;
