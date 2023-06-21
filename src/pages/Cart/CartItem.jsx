import React from 'react';
import styles from './CartItem.module.css';
import remove from '../../assets/images/icons/close_dark.png';
import ImgWithFallback from '../../utils/ImgWithFallback';
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import { euro } from '../../utils/euroFormat';

const CartItem = ({ item }) => {

  return (
    <tr className={styles.container}>
        <td>
          <div className={styles.product__info}>
            <button type='button' className={styles.remove}>
              <img src={remove} alt="Remove" />
            </button>
            <ImgWithFallback className={styles.thumbnail} src={item.img} fallback={item.fallback}/>
            <div>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{euro.format(item.price)}</p>
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
        <p className={styles.total}>{euro.format(1300)}</p> 
      </td>
    </tr>
  );
};

export default CartItem;