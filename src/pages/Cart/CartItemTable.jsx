import React, { useEffect, useState } from 'react';
import styles from './CartItemTable.module.css';
import CartButton from './CartButton';
import { euro } from '../../utils/euroFormat';

const CartItemTable = ({ children, cart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(calculateCartTotal());
  }, [cart])

  const calculateCartTotal = () => {
    return cart.reduce((sum, currentItem) => {
      return sum + (Number(currentItem.price) * Number(currentItem.amount));
     }, 0);
  }

  return (
    <>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header__left} scope='col' >Product name</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Total price</th>
        </tr>
      </thead>
      <tbody>
      {children}
      </tbody>
      <tfoot>
        <tr>
          <th scope='row' className={styles.header__left}>Total</th>
          <td className={styles.total__amount}>{euro.format(cartTotal)}</td>
        </tr>
      </tfoot>
    </table>
    <CartButton text="Proceed to checkout"/>
    </>
  );
};

export default CartItemTable;
