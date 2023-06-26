/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartView from '../CartView';

describe('<CartView />', () => {
  it('Check if correct amount of items are rendered if cart not empty', () => {
    render(
      <CartView
        cart={[
          {
            id: 'aabbcc',
            name: 'Test product',
            desc: 'Test description',
            price: '4567',
            img: '../assets/images/products/webp/ring6.webp',
            fallback: '../assets/images/products/webp/ring6.webp',
            amount: 1,
          },
          {
            id: 'bbccaa',
            name: 'Test product',
            desc: 'Test description',
            price: '3453',
            img: '../assets/images/products/webp/ring6.webp',
            fallback: '../assets/images/products/webp/ring6.webp',
            amount: 2,
          },
        ]}
      />,
    );
    const cartItems = screen.getAllByTestId('cart-item');

    expect(cartItems.length).toBe(2);
  });
});
