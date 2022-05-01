import React from 'react';
import {render} from '@testing-library/react-native';

import HtmlText from '.';

test('renders correctly with children', () => {
  const {toJSON} = render(<HtmlText>{'<p>some text</p>'}</HtmlText>);
  expect(toJSON()).toMatchSnapshot();
});

test('renders nothing when children is undefined', () => {
  const {toJSON} = render(<HtmlText>{undefined}</HtmlText>);
  expect(toJSON()).toMatchSnapshot();
});
