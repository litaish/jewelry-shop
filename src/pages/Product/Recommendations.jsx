import React from 'react';
import styles from './Recommendations.module.css';
import RecommendationsCard from './RecommendationsCard';
import products from '../../data/products';

const Recommendations = () => {
  const getRecommendations = () => {
    const shuffledCart = products.sort(() => Math.random() - 0.5);
    return shuffledCart.slice(0, 3);
  }

  const recommendations = getRecommendations();

  return (
    <div className={styles.container}>
        <h5 className={styles.title}>You may also like...</h5>
        <div className={styles.grid}>
        {recommendations?.map(product => <RecommendationsCard key={product.id} product={product} />)}
        </div>
    </div>
  );
};

export default Recommendations;