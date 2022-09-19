import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import TopBar from "./Components/Appbar/AppBar";
import GalleryScroll from "./Components/GalleryScroll/GalleryScroll";
import AppLoading from "expo-app-loading";

const fonts = () =>
  Font.loadAsync({
    "Aref-regular": require("./assets/fonts/ArefRuqaaInk-Regular.ttf"),
    "Lato-light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <SafeAreaView style={styles.container}>
        <GalleryScroll />
        <TopBar />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F1FAEE",
    alignItems: "center",
  },
});
