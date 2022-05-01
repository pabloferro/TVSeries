import React from 'react';
import {render} from '@testing-library/react-native';

import CustomTextInput from '.';

test('renders correctly', () => {
  const {toJSON} = render(<CustomTextInput />);

  expect(toJSON()).toMatchSnapshot();
});
