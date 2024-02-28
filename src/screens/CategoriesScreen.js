import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import { CATEGORIES } from "../data/dummy-data";
import CatergoryGridTile from "../components/CatergoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderItems = ({ item }) => {
    return (
      <CatergoryGridTile
        id={item.id}
        title={item.title}
        color={item.color}
        onPress={() => {
          navigation.navigate("Meals", {categoryId: item.id, catTitle: item.title});
        }}
      />
    );
  };

  return (
    <Screen style={{ flexDirection: "row" }}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </Screen>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
