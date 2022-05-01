import React, {useRef, useState} from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {LogBox} from 'react-native';

import styles from './styles';

// Ignore warnings from SmoothPinCodeInput
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

interface Props {
  onFulfill: (pin: string) => Promise<boolean>;
  onError?: () => void;
}

export default function PinInput({onFulfill, onError, ...props}: Props) {
  const pinInputRef = useRef();
  const [code, setCode] = useState('');

  return (
    <SmoothPinCodeInput
      password
      autoFocus
      ref={pinInputRef}
      cellStyle={styles.cellStyle}
      cellStyleFocused={styles.cellStyleFocused}
      textStyle={styles.textStyle}
      value={code}
      onTextChange={setCode}
      onFulfill={async (finalCode: string) => {
        if (finalCode) {
          const success = await onFulfill(finalCode);
          if (!success) {
            (pinInputRef.current as any)?.shake().then(() => setCode(''));
            onError?.();
          }
        }
      }}
      {...props}
    />
  );
}
