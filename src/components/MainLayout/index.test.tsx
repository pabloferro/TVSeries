import React from 'react';
import {render} from '@testing-library/react-native';

import MainLayout from '.';

test('renders correctly', () => {
  const {toJSON} = render(<MainLayout>Children</MainLayout>);
  expect(toJSON()).toMatchSnapshot();
});

test('renders correctly for lists', () => {
  const {toJSON} = render(<MainLayout list>Children</MainLayout>);
  expect(toJSON()).toMatchSnapshot();
});
