/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartItemTable from '../CartItemTable';
import { euro } from '../../../utils/euroFormat';

describe('<CartItemTable />', () => {
  it('On render, show correct total cart sum', () => {
    render(
      <CartItemTable
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
    const total = screen.getByTestId('total');

    expect(total.textContent).toBe(euro.format(11473));
  });
});
