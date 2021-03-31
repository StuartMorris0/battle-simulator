import React from 'react';

import { render } from 'global/utils/test-utils';

import RollMessage from './RollMessage';
import { IRollMessageProps } from './RollMessage.types';

describe('RollMessage component', () => {
  let props: IRollMessageProps;
  beforeAll(() => {
    props = {
      message: 'Test Message',
      playerHasWon: false,
      opponentHasWon: false,
    };
  });
  const renderComponent = () => render(<RollMessage {...props} />);

  test('renders message', () => {
    const { getByText } = render(<RollMessage {...props} />);
    expect(getByText(/Test Message/)).toBeInTheDocument();
  });

  test('renders player wins message', () => {
    props.playerHasWon = true;
    const { getByText } = renderComponent();
    expect(getByText('You won!')).toBeInTheDocument();
  });

  test('renders game over when opponent wins', () => {
    props.playerHasWon = false;
    props.opponentHasWon = true;
    const { getByText } = renderComponent();
    expect(getByText('Game Over')).toBeInTheDocument();
  });
});
