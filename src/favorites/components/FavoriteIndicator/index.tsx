import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {brandPrimary} from '../../../constants/colors';
import {FavoriteTypes} from '../../context/FavoriteContext';
import useFavorite from '../../context/useFavorite';

interface Props {
  type: FavoriteTypes;
  id: number;
  style?: StyleProp<ViewStyle>;
}

export default function FavoriteIndicator({type, id, style}: Props) {
  const {isFavorite} = useFavorite(type, id);
  if (!isFavorite) {
    return null;
  }
  return (
    <MaterialCommunityIcons
      style={style}
      name="heart"
      color={brandPrimary}
      size={20}
    />
  );
}
