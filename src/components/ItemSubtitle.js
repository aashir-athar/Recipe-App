import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSizes } from "../utils/fontSize";
import CustomText from "./CustomText";
import { spacing } from "../utils/spacing";

const ItemSubtitle = ({ children }) => {
  return (
    <View
      style={{
        borderBottomColor: "white",
        borderBottomWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: spacing.small,
      }}
    >
      <CustomText
        style={{
          fontWeight: "bold",
          fontSize: fontSizes.large,
          color: "white",
        }}
      >
        {children}
      </CustomText>
    </View>
  );
};

export default ItemSubtitle;

const styles = StyleSheet.create({});
