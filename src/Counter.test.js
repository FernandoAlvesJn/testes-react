import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrementa o contador', () => {
  const { getByText } = render(<Counter />);
  const buttonIncrement = getByText(/Incrementar/i);
  fireEvent.click(buttonIncrement);
  expect(getByText(/Contador: 1/i)).toBeInTheDocument();
});

test('decrementa o contador', () => {
  const { getByText } = render(<Counter />);
  const buttonIncrement = getByText(/Incrementar/i);
  const buttonDecrement = getByText(/Decrementar/i);

  fireEvent.click(buttonIncrement);
  fireEvent.click(buttonDecrement);
  expect(getByText(/Contador: 0/i)).toBeInTheDocument();
});