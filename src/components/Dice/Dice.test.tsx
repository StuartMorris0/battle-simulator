import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import Dice from './Dice';

test('renders Dice', () => {
  render(<Dice />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
