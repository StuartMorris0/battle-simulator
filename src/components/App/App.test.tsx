import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { userEvent } from 'global/utils/test-utils';
import { store } from 'store';

import App from '.';

describe('App Component', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  test('render snaphost', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('handle roll and attack', async () => {
    jest.useFakeTimers();
    const { getByText, findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    userEvent.click(getByText('Attack'));
    expect(await findByText('rolling...')).toBeInTheDocument();
    jest.runAllTimers();
  });
});
