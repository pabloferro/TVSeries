import React, {ComponentProps, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

export default function ServerImage({
  style,
  ...fastImageProps
}: ComponentProps<typeof FastImage>) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLoaded = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setImageLoaded(true));
  };

  return (
    <View style={style}>
      {!imageLoaded && <View style={[styles.fill, styles.placeHolder]} />}
      <Animated.View
        style={{
          ...styles.fill,
          opacity: fadeAnim,
        }}>
        <FastImage
          {...fastImageProps}
          onLoadEnd={handleLoaded}
          style={styles.fill}
        />
      </Animated.View>
    </View>
  );
}
