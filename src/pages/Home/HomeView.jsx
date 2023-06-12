import React from 'react';
import styles from './HomeView.module.css';
import Hero from './Hero';

const HomeView = () => {
  return (
    <div className={styles.background}>
      <Hero />
    </div>
  );
};

export default HomeView;
