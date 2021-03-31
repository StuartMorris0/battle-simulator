import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import GamePlayer from '.';
import { IGamePlayerProps } from './GamePlayer.types';

describe('GamePlayer Component', () => {
  let props: IGamePlayerProps;
  beforeEach(() => {
    props = {
      player: {
        playerName: 'PLAYER',
        dice1: 1,
        dice2: 2,
        health: {
          current: 85,
          lost: 1,
        },
        hasWon: false,
      },
    };
  });

  const renderComponent = () => render(<GamePlayer {...props} />);

  test('renders component', () => {
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('GamePlayer')).toBeInTheDocument();
    expect(getByText('PLAYER')).toBeInTheDocument();
    expect(getByText('85')).toBeInTheDocument();
  });

  test('render snaphost', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
