import React from 'react';

import { render } from 'global/utils/test-utils';

import HealthBar from '.';
import { IHealthBarProps } from './HealthBar.types';

describe('HealthBar Component', () => {
  let props: IHealthBarProps;
  beforeEach(() => {
    props = {
      current: 100,
      lost: undefined,
    };
  });

  const renderComponent = () => render(<HealthBar {...props} />);

  test('renders', () => {
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('HealthBar')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
  });

  test('renders lost health', () => {
    props.lost = 6;
    const { getByText } = renderComponent();
    expect(getByText('-6')).toBeInTheDocument();
  });

  test('renders random health', () => {
    props.current = 25;
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('HealthBar')).toBeInTheDocument();
    expect(getByText('25')).toBeInTheDocument();
  });

  test('renders 0 for negative health', () => {
    props.current = -25;
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('HealthBar')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  test('render snaphost', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
