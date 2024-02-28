import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { spacing } from "../utils/spacing";
import { fontSizes } from "../utils/fontSize";
import CustomText from "./CustomText";

const List = ({ data }) => {
  return (
    <View
      style={{
        padding: spacing.small,
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: spacing.small,
              borderRadius: 30,
            }}
          >
            <CustomText
              style={{
                color: "#222",
                fontSize: fontSizes.medium,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </CustomText>
          </View>
        );
      })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
