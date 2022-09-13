import { SafeAreaView, StyleSheet } from 'react-native';
import TopBar from './Components/Tbar/TopBar';
import GalleryScroll from './Components/GalleryScroll/GalleryScroll';
import React from 'react';
require("./Components/FontLoader");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <GalleryScroll />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
