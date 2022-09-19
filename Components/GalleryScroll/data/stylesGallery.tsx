import { StyleSheet } from "react-native";

export const stylesGallery = StyleSheet.create({
  GalleryContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  GalletyItem: {
    width: "100%",
    marginVertical: 14,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  GalleryItemImage: {
    width: 300,
    height: 160,
    marginBottom: 10,
  },
  GalleryItemTitle: {
    fontSize: 18,
    fontFamily: "Aref-regular",
  },
});
export default stylesGallery;
