import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h3 className={styles.title}>Discover Your Perfect Sparkle</h3>
      <p className={styles.paragraph}>
        Step into a world of shimmering enchantment at GemLuxe today! Explore our curated collection
        of exquisite jewelry, meticulously crafted to ignite your inner radiance.
      </p>
      <Link to='/shop' className={styles.button}>
        View more
      </Link>
    </div>
  );
};

export default Hero;
