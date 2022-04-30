import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {TextInput, TextInputProps} from 'react-native';

import {white} from '../../constants/colors';

import styles from './styles';

export default function CustomTextInput({style, ...props}: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={white}
      style={[styles.textInput, style]}
      {...props}
    />
  );
}
