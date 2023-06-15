import React from 'react';
import styles from './ProductCard.module.css';
import ImgWithFallback from '../../utils/ImgWithFallback';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
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
        <p className={styles.card__desc}>{product.desc}</p>
        <p className={styles.card__price}>{product.price}</p>
    </div>
  );
};

export default ProductCard;