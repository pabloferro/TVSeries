import React from 'react';
import {render} from '@testing-library/react-native';

import {TextVariants} from './TextVariants';
import CustomText from '.';

test.each(Object.values(TextVariants))(
  'variant %s renders correctly',
  variant => {
    const {toJSON} = render(<CustomText variant={variant}>Text</CustomText>);
    expect(toJSON()).toMatchSnapshot();
  },
);

test('without variant renders correctly', () => {
  const {toJSON} = render(<CustomText>Text</CustomText>);
  expect(toJSON()).toMatchSnapshot();
});
