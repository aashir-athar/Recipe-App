import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconButton = ({ name, color, size, func }) => {
  return (
    <Pressable style={({ pressed }) => pressed && {opacity: 0.25}} onPress={func}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
