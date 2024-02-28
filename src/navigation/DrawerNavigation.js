import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#222",
        },
        sceneContainerStyle: {
          backgroundColor: "#222",
        },
        drawerContentStyle: {
          backgroundColor: "#222",
        },
        drawerActiveTintColor: "orangered",
        drawerInactiveTintColor: "#ccc"
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="format-list-bulleted" />
        )
      }} />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
        drawerIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="heart" />
        )
      }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
