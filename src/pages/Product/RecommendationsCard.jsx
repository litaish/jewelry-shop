import React from 'react';
import AddToCartButton from '../../components/ui/AddToCartButton';
import ImgWithFallback from '../../utils/ImgWithFallback';
import styles from './RecommendationsCard.module.css';
import { Link } from 'react-router-dom';

const RecommendationsCard = ({ product }) => {
  return (
    <div className={styles.card}>
    <Link to={`/shop/${product.id}`} state={ {product: product }}>
      <div className={styles.card__img__container}>
      <ImgWithFallback className={styles.card__img} src={product.img} fallback={product.fallback} alt={product.name}/>
      <div className={styles.card__overlay}>
        <span>View item</span>
      </div>
      </div>
    </Link>
    <p className={styles.card__name}>{product.name}</p>
    <p className={styles.card__price}>{product.price}</p>
    <AddToCartButton />
    </div>
  );
};

export default RecommendationsCard;