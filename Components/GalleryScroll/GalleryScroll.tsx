import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React, { PureComponent } from 'react';
import { Posts } from './Posts';
import { PhotoItem } from './photoItem';

class GalleryScroll extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{}}>
        <FlatList
          data={Posts}
          renderItem={({ item }) => <PhotoItem props={item} />}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    )
  }
}

export const styles = StyleSheet.create({
  GalleryContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',

  },

  GalleryItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BB86FC',
    color: '#000000',
    fontFamily: 'NunitoSans_400Regular'
  },
})

export default GalleryScroll