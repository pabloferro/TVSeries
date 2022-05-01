import React from 'react';
import {render} from '@testing-library/react-native';

import NoElements from '.';

test('renders correctly', () => {
  const {toJSON} = render(
    <NoElements message="No elements" iconName="search" />,
  );

  expect(toJSON()).toMatchSnapshot();
});
