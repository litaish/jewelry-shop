import React from 'react';
import Header from '../../components/ui/Header';
import styles from './CartView.module.css';
import CartItemTable from './CartItemTable';
import CartItem from './CartItem';
import EmptyCartMessage from './EmptyCartMessage';

const CartView = ({ cart, cartTotal, handleRemoveFromCart }) => {

  let view;

  if (cart.length > 0) {
    view = 
      <CartItemTable cartTotal={cartTotal}>
        {cart?.map(item => <CartItem key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart}/>)}
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
