import React from 'react';
import styles from './CartItemTable.module.css';
import CartButton from './CartButton';

const CartItemTable = ({ children }) => {
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
          <td className={styles.total__amount}>€3900</td>
        </tr>
      </tfoot>
    </table>
    <CartButton text="Proceed to checkout"/>
    </>
  );
};

export default CartItemTable;
