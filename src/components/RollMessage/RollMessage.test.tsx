import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import RollMessage from './RollMessage';

test('renders RollMessage', () => {
  render(<RollMessage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
