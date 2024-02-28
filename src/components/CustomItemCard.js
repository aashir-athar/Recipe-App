import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { spacing } from "../utils/spacing";
import { sizes } from "../utils/sizes";
import { fontSizes } from "../utils/fontSize";

const CustomItemCard = ({
  image,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  func,
}) => {
  return (
    <Pressable onPress={func}>
      <View style={styles.cardContainer}>
        {image && (
          <Image
            style={{ width: "100%", height: sizes.xLarge }}
            source={{ uri: image }}
          />
        )}
        <View style={{padding: spacing.small,  gap: 2}}>
          <CustomText style={{ fontWeight: "bold", fontSize: fontSizes.large, textAlign: "center" }}>{title}</CustomText>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              padding: spacing.xSmall
            }}
          >
            <CustomText
              style={{
                color: "orangered",
                textAlign: "center",
                fontSize: fontSizes.medium,
              }}
            >
              {subtitle1}{" mins • "}
            </CustomText>
            <CustomText
              style={{
                color: "orangered",
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: fontSizes.medium,
              }}
            >
              {subtitle2}{" • "}
            </CustomText>
            <CustomText
              style={{
                color: "orangered",
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: fontSizes.medium,
              }}
            >
              {subtitle3}
            </CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CustomItemCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: sizes.small / 2,
    overflow: "hidden",
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: spacing.small,
    marginTop: spacing.small,
  },
});
