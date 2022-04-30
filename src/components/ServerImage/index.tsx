import React, {ComponentProps, useState} from 'react';
import {LayoutAnimation, UIManager, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function ServerImage({
  style,
  ...fastImageProps
}: ComponentProps<typeof FastImage>) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoaded = () => {
    setImageLoaded(true);
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        400,
        LayoutAnimation.Types.linear,
        LayoutAnimation.Properties.opacity,
      ),
    );
  };

  return (
    <View style={style}>
      <FastImage
        {...fastImageProps}
        onLoadEnd={handleLoaded}
        style={styles.fill}
      />
      {!imageLoaded && <View style={styles.placeHolder} />}
    </View>
  );
}
