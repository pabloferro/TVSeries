import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {Text, TextProps} from 'react-native';

import variants from './variantsStyles';
import {TextVariants} from './TextVariants';

interface Props extends TextProps {
  variant?: TextVariants;
}

export default function CustomText({variant, style, ...props}: Props) {
  return <Text style={[variants[variant || 'default'], style]} {...props} />;
}
