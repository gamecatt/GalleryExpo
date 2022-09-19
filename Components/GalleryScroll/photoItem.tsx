import { Image, Text, View } from "react-native";
import React from "react";
import { stylesGallery } from "./data/stylesGallery";
import st from "../../styles/st";

export const PhotoItem = ({ props }) => {
  return (
    <View style={[stylesGallery.GalletyItem, st.HardShadow]}>
      <View style={stylesGallery.GalleryItemImage}>
        <Image
          source={{ uri: props.uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View>
        <Text style={stylesGallery.GalleryItemTitle}>
          Author - {props.author}
        </Text>
      </View>
    </View>
  );
};
