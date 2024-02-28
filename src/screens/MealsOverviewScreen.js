import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import Screen from "./Screen";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const specificCategoryItems = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <Screen>
      <MealsList items={specificCategoryItems} navigation={navigation} />
    </Screen>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
