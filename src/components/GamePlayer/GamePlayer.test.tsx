import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import Player from './Player';

test('renders Player', () => {
  render(<Player />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
