import React from 'react';
import NoElements from '.';
import {render} from '@testing-library/react-native';

test('renders correctly', () => {
  const {toJSON} = render(
    <NoElements message="No elements" iconName="search" />,
  );

  expect(toJSON()).toMatchSnapshot();
});
