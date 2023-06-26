/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddToCartButton from '../AddToCartButton';
import userEvent from '@testing-library/user-event';

describe('<AddToCartButton />', () => {
  it('Call onClick', async () => {
    const onClickMock = jest.fn();
    const user = userEvent.setup();

    render(<AddToCartButton handleAddToCart={onClickMock} />);
    const btn = screen.getByRole('button');

    await user.click(btn);

    expect(onClickMock).toBeCalled();
  });
});
