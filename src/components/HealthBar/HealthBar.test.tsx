import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import HealthBar from '.';

test('renders Bar', () => {
  render(<HealthBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
