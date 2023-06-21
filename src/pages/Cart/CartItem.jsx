import React from 'react';
import styles from './CartItem.module.css';
import remove from '../../assets/images/icons/close_dark.png';
import ImgWithFallback from '../../utils/ImgWithFallback';
// Temp
import bracelet from '../../assets/images/products/webp/bracelet1.webp';
import fallback from '../../assets/images/products/fallback.png';
import { NumericStepper } from '@anatoliygatt/numeric-stepper';

const CartItem = () => {
  return (
    <tr className={styles.container}>
        <td>
          <div className={styles.product__info}>
            <button type='button' className={styles.remove}>
              <img src={remove} alt="Remove" />
            </button>
            {/* <ImgWithFallback src={product.img} fallback={product.fallback} alt={product.name}/> */}
            <ImgWithFallback className={styles.thumbnail} src={bracelet} fallback={fallback}/>
            <div>
              <p className={styles.name}>Cool bracelet</p>
              <p className={styles.price}>€1300</p>
            </div>
          </div>
        </td>
      <td className={styles.centered}>
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
      </td>
      <td>
        <p className={styles.total}>€1300</p> 
      </td>
    </tr>
  );
};

export default CartItem;