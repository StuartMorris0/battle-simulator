import React from 'react';

import { render } from 'global/utils/test-utils';

import Dice from './Dice';
import { IDiceProps } from './Dice.types';

describe('Dice Component', () => {
  let props: IDiceProps;
  beforeEach(() => {
    props = {
      value: 2,
      isRolling: false,
    };
  });

  const renderComponent = () => render(<Dice {...props} />);

  test('renders rolled dice', () => {
    const { getByTestId, getByRole } = renderComponent();
    expect(getByTestId('RolledDice')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  test('renders rolling blank dice', () => {
    props.isRolling = true;
    const { getByTestId, getByRole } = renderComponent();
    expect(getByTestId('RollingDice')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  test('renders empty when in starting state', () => {
    props.value = undefined;
    const { container } = renderComponent();
    expect(container).toBeEmptyDOMElement();
  });

  it.each([1, 2, 3, 4, 5, 6, 7])('snapshot test for variant %s', (variant) => {
    // 7 will render the blank dice image
    props.value = variant;
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
