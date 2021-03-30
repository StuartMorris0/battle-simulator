import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import PlayerAvatar from './PlayerAvatar';

test('renders PlayerAvatar', () => {
  render(<PlayerAvatar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
