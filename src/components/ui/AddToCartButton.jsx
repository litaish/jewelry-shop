import React from 'react';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({ handleAddToCart }) => {
  return (
    <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
  );
};

export default AddToCartButton;