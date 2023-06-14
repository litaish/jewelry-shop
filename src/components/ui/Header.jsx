import React from 'react';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
        <h4>{title}</h4>
        <hr />
    </header>
  );
};

export default Header;