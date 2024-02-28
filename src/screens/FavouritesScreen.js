import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favouriteContext";

const FavouritesScreen = ({ navigation }) => {
  const favContext = useContext(FavouriteContext);
  const favMeals = MEALS.filter((item) => favContext.ids.includes(item.id));

  if (favMeals.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#222",
        }}
      >
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          No favourite yet!
        </Text>
      </View>
    );
  }

  return <MealsList items={favMeals} navigation={navigation} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
