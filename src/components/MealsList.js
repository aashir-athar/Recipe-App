import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { spacing } from "../utils/spacing";
import CustomItemCard from "./CustomItemCard";

const MealsList = ({ items, navigation }) => {

  const renderItems = ({ item }) => {
    return (
      <CustomItemCard
        image={item.imageUrl}
        title={item.title}
        subtitle1={item.duration}
        subtitle2={item.complexity}
        subtitle3={item.affordability}
        func={() => {
          navigation.navigate("MealDetails", {
            id: item.id,
            title: item.title,
            image: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            isGlutenFree: item.isGlutenFree,
            isVegan: item.isVegan,
            isVegetarian: item.isVegetarian,
            isLactoseFree: item.isLactoseFree,
            ingredients: item.ingredients,
            steps: item.steps,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={{ paddingHorizontal: spacing.medium }}
      data={items}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealsList;

const styles = StyleSheet.create({});
