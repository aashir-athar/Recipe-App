import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSizes } from "../utils/fontSize";
import { spacing } from "../utils/spacing";
import CustomText from "./CustomText";

const ItemDetail = ({ duration, complexity, affordability }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: spacing.small,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomText
        style={{
          color: "orangered",
          fontSize: fontSizes.large,
          textAlign: "center",
        }}
      >
        {duration}
        {" mins • "}
      </CustomText>
      <CustomText
        style={{
          color: "orangered",
          textTransform: "capitalize",
          fontSize: fontSizes.large,
          textAlign: "center",
        }}
      >
        {complexity}
        {" • "}
      </CustomText>
      <CustomText
        style={{
          color: "orangered",
          textTransform: "capitalize",
          fontSize: fontSizes.large,
          textAlign: "center",
        }}
      >
        {affordability}
      </CustomText>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
