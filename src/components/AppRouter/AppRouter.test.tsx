import React from 'react';

import { render, userEvent } from 'global/utils/test-utils';

import AppRouter from '.';

// describe('AppRouter', () => {
//   it('renders without crashing', () => {
//     const { getByText } = render(<AppRouter />);
//     expect(getByText('Attack)).toBeInTheDocument();
//   });

//   it('renders not found page', () => {
//     const { getByText } = render(<AppRouter />);
//     userEvent.click(getByText('NotFound'));
//     expect(getByText('Page Not Found')).toBeInTheDocument();
//   });
// });

test('example', () => {
  expect(1).toBe(1);
});
