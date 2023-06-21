import React from 'react';
import styles from './ShopView.module.css';
import Header from '../../components/ui/Header';
import CardGrid from './CardGrid';
import products from '../../data/products';
import ProductCard from './ProductCard';


const ShopView = () => {
  return (
    <div className={styles.container}>
      <Header title={'All jewelry'}/>
      <CardGrid>
        {products?.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </CardGrid>
    </div>
  );
};

export default ShopView;
