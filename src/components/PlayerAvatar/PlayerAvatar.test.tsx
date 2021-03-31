import React from 'react';

import { getByRole, getByTestId, render } from 'global/utils/test-utils';

import PlayerAvatar from './PlayerAvatar';
import { IPlayerAvatarProps } from './PlayerAvatar.types';

describe('PlayerAvatar Component', () => {
  let props: IPlayerAvatarProps;
  beforeEach(() => {
    props = {
      name: 'PLAYER',
      hasWon: false,
    };
  });

  const renderComponent = () => render(<PlayerAvatar {...props} />);

  test('renders image and player name', () => {
    const { getByText, getByRole } = renderComponent();
    expect(getByText('PLAYER')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  test('renders trophies when won', () => {
    props.hasWon = true;
    const { getByTestId } = renderComponent();
    expect(getByTestId('trophies')).toBeInTheDocument();
  });

  test('renders opponent avatar', () => {
    props.name = 'MONSTER';
    const { getByRole } = renderComponent();
    expect(getByRole('img')).toHaveAttribute('alt', 'MONSTER');
  });
});
