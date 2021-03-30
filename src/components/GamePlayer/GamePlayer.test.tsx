import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import GamePlayer from '.';

test('renders Player', () => {
  render(<GamePlayer display="ltr" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
