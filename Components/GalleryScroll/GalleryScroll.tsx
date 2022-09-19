import { SafeAreaView, FlatList } from "react-native";
import React, { Component } from "react";
import { Posts } from "./data/Posts";
import { PhotoItem } from "./PhotoItem";
import stylesGallery from "./data/stylesGallery";

export default class GalleryScroll extends Component {
  render() {
    return (
      <SafeAreaView style={[{ top: 92 }, stylesGallery.GalleryContainer]}>
        <FlatList
          data={Posts}
          renderItem={({ item }) => <PhotoItem props={item} />}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    );
  }
}
