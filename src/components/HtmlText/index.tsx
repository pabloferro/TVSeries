import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {white} from '../../constants/colors';

export default function HtmlText({children}: {children: string | undefined}) {
  const {width} = useWindowDimensions();
  if (!children) {
    return null;
  }
  return (
    <RenderHtml
      contentWidth={width}
      source={{html: children}}
      // eslint-disable-next-line react-native/no-inline-styles
      baseStyle={{color: white, fontSize: 16, fontWeight: '400'}}
    />
  );
}
