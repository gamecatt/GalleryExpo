import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './GalleryScroll';

export const PhotoItem = ({ props }) => {
  return (
    <View style={styles.GalleryItem}>
      <Text>Hello - {props.title}</Text>
    </View>
  );
};
