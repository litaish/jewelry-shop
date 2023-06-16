import React from 'react';
import styles from './ProductView.module.css';
import ImgWithFallback from '../../utils/ImgWithFallback';
import AddToCartButton from '../../components/ui/AddToCartButton';
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import { useLocation } from 'react-router-dom';
import Recommendations from './Recommendations';
// import CartNotification from '../../components/ui/CartNotification';

const ProductView = () => {
  const { state } = useLocation();
  const { product } = state || {}

  if (!product) { 
    return <h1>No product found!</h1>;
  }

  return (
    <div className={styles.product__view}>
      <div className={styles.product}>
        <ImgWithFallback className={styles.product__image} src={product.img} fallback={product.fallback} alt={product.name}/>
        <div>
          <p className={styles.product__name}>{product.name}</p>
          <p className={styles.product__price}>{product.price}</p>
          <p className={styles.product__desc}>{product.desc}</p>
          <div className={styles.actions}>
          <NumericStepper
        minimumValue={1}
        maximumValue={200}
        stepValue={1}
        initialValue={1}
        size="sm"
        inactiveTrackColor="#FFFFFF"
        activeTrackColor="#ede6df"
        activeButtonColor="#ffedd5"
        inactiveIconColor="#4f453a"
        hoverButtonColor="#CAB9A7"
        activeIconColor="#2e2821"
        disabledIconColor="#cccccc"
        thumbColor="#CAB9A7"
        thumbShadowAnimationOnTrackHoverEnabled={false}
        focusRingColor="#CAB9A7"
        decrementButtonAriaLabel="Decrement"
        incrementButtonAriaLabel="Increment"
      /> 
            <AddToCartButton />
            {/* <CartNotification /> */}
          </div>
        </div>
      </div>
      <Recommendations recommendations={[]}/>
  </div>
  );
};

export default ProductView;
