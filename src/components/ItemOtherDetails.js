import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fontSizes } from "../utils/fontSize";
import { spacing } from "../utils/spacing";

const ItemOtherDetails = ({ otherDetail, name }) => {
  return (
    <View
      style={{
        width: "40%",
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.small,
        backgroundColor: "white",
        borderRadius: 20,
        padding: spacing.small
      }}
    >
      {otherDetail ? (
        <MaterialCommunityIcons
          name="sticker-check"
          color={"orangered"}
          size={20}
        />
      ) : (
        <MaterialCommunityIcons
          name="sticker-remove"
          color={"black"}
          size={20}
        />
      )}
      <Text
        style={{
          fontSize: fontSizes.medium,
          color: "black",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ItemOtherDetails;

const styles = StyleSheet.create({});
