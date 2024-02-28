import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MealsNavigation from "./src/navigation/MealsNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FavouriteContextProvider from "./src/store/context/favouriteContext";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <MealsNavigation />
        </NavigationContainer>
      </FavouriteContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
