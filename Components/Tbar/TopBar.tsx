import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const Routes = [
  {
    id: '0',
    title: 'Home',
    active: false,
    route: '/',
  },
  {
    id: '1',
    title: 'Search',
    active: true,
    route: '/',
  },
  {
    id: '2',
    title: 'Good luck!',
    active: false,
    route: '/',
  },
];

const Item = ({ style, data }) => (
  <View style={style}>
    <Text style={data.active ? (styles.AppMenu.MenuItem.Title, styles.AppMenu.MenuItem.Active) : styles.AppMenu.MenuItem.Title}> {data.title}</Text>
  </View>
);

const TopBar = () => {
  return (
    <View style={styles.AppBar}>
      <Text style={styles.AppBar.AppLogo}>Unllery</Text>
      <SafeAreaView style={styles.AppMenu}>
        <Item style={styles.AppMenu.MenuItem} data={Routes[0]} />
        <Item style={styles.AppMenu.MenuItem} data={Routes[1]} />
        <Item style={styles.AppMenu.MenuItem} data={Routes[2]} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121212',

    AppLogo: {
      color: '#B00020',
      fontSize: 26,
      fontFamily: 'NunitoSans_900Black',
    },
  },
  AppMenu: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',

    MenuItem: {
      minHeight: 50,
      alignItems: 'center',
      justifyContent: 'center',

      Title: {
        fontSize: 13,
        color: '#FFFFFF',
      },
      Active: {
        fontSize: 13,
        color: '#B00020',
      },
    },
  },
})

export default TopBar;