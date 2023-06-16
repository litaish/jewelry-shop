import React from 'react';
import styles from './Recommendations.module.css';
import RecommendationsCard from './RecommendationsCard';
import products from '../../data/products';

// Temporary recommendations displayingv
const tempRecommendations = products.slice(6, 9);

const Recommendations = () => {
  return (
    <div className={styles.container}>
        <h5 className={styles.title}>You may also like...</h5>
        <div className={styles.grid}>
        {tempRecommendations?.map(product => <RecommendationsCard key={product.id} product={product} />)}
        </div>
    </div>
  );
};

export default Recommendations;