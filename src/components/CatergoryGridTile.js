import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSizes } from './../utils/fontSize';
import { spacing } from "../utils/spacing";
import { sizes } from "../utils/sizes";

const CatergoryGridTile = ({ title, color, id, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.gridItem, { backgroundColor: color }, pressed && {opacity: 0.75}]}>
      <Text style={{ fontWeight: "bold", fontSize: fontSizes.large }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CatergoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: sizes.large,
    borderRadius: sizes.large / 5,
    justifyContent: "center",
    alignItems: "center",
    margin: spacing.medium,
    elevation: 4,
    padding: spacing.medium,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2 },
    shadowOffset: 8,
  },
});
