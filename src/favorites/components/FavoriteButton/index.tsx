import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {brandPrimary} from '../../../constants/colors';
import {FavoriteTypes} from '../../context/FavoriteContext';
import useFavorite from '../../context/useFavorite';

interface Props {
  type: FavoriteTypes;
  id: number;
  style?: StyleProp<ViewStyle>;
}

export default function FavoriteButton({type, id, style}: Props) {
  const {isFavorite, setFavorite} = useFavorite(type, id);
  return (
    <TouchableOpacity onPress={() => setFavorite(!isFavorite)}>
      <MaterialCommunityIcons
        style={style}
        name={isFavorite ? 'heart' : 'heart-outline'}
        color={brandPrimary}
        size={40}
      />
    </TouchableOpacity>
  );
}
