import React from 'react';
import styles from './CardGrid.module.css';

const CardGrid = ( {children }) => {
  return (
    <div className={styles.card__grid}>{children}</div>
  );
};

export default CardGrid;
