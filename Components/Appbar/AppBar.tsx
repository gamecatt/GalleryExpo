import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import st from "../../styles/st";

const AppbarMenu = [
  {
    id: "1",
    title: "Search img/user/smth",
    icon: (
      <MaterialCommunityIcons name="image-search" size={24} color="black" />
    ),
  },
  {
    id: "0",
    title: "Liked posts",
    icon: <AntDesign name="heart" size={24} color="black" />,
  },
  {
    id: "2",
    title: "Random img/user/smth",
    icon: <FontAwesome5 name="dice" size={24} color="black" />,
  },
];

const Item = ({ style, props }) => <View style={style}>{props.icon}</View>;

export const TopBar = () => {
  return (
    <View style={st.AppBar}>
      <View>
        <FontAwesome5 name="bars" size={24} color="black" />
      </View>
      <View>
        <Text style={styles.BarItem}>Posts</Text>
      </View>
      <View style={styles.AppMenu}>
        <Item style={styles.MenuItem} props={AppbarMenu[0]} />
        <Item style={styles.MenuItem} props={AppbarMenu[1]} />
        <Item style={styles.MenuItem} props={AppbarMenu[2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AppMenu: {
    paddingVertical: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  MenuItem: {
    paddingHorizontal: 5,
  },

  BarItem: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: "#04100A",
    fontFamily: "Lato-bold",
  },
});

export default TopBar;
