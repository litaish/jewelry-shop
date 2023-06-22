import React from 'react';
import Header from '../../components/ui/Header';
import styles from './CartView.module.css';
import CartItemTable from './CartItemTable';
import CartItem from './CartItem';
import EmptyCartMessage from './EmptyCartMessage';

const CartView = ({ cart, handleRemoveFromCart, handleChangeAmount }) => {
  let view;

  if (cart.length > 0) {
    view = (
      <CartItemTable cart={cart}>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleRemoveFromCart={handleRemoveFromCart}
            handleChangeAmount={handleChangeAmount}
          />
        ))}
      </CartItemTable>
    );
  } else {
    view = <EmptyCartMessage />;
  }

  return (
    <div className={styles.container}>
      <Header title='Cart' />
      {view}
    </div>
  );
};

export default CartView;
