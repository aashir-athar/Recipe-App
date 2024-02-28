import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import CustomText from "../components/CustomText";
import { fontSizes } from "../utils/fontSize";
import { spacing } from "../utils/spacing";
import List from "../components/List";
import ItemDetail from "../components/ItemDetail";
import ItemSubtitle from "../components/ItemSubtitle";
import IconButton from "../components/IconButton";
import ItemOtherDetails from "../components/ItemOtherDetails";
import { FavouriteContext } from "../store/context/favouriteContext";

const MealDetailsScreen = ({ route, navigation }) => {
  const favMeals = useContext(FavouriteContext);

  const {
    id,
    title,
    image,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    ingredients,
    steps,
  } = route.params;

  const isFavourite = favMeals.ids.includes(id);

  const handleChangeFavStatus = () => {
    if (isFavourite) {
      favMeals.removeFavourite(id);
    } else {
      favMeals.addFavourite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isFavourite ? "heart": "heart-outline"}
            color={isFavourite ? "red" : "white"}
            size={25}
            func={handleChangeFavStatus}
          />
        );
      },
    });
  }, [navigation, handleChangeFavStatus]);

  return (
    <ScrollView style={styles.detailsContainer}>
      <View
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          overflow: "hidden",
        }}
      >
        <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
      </View>
      <View
        style={{
          padding: spacing.medium,
          gap: 5,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CustomText
          style={{
            fontWeight: "bold",
            fontSize: fontSizes.xxLarge,
            color: "white",
            textAlign: "center",
          }}
        >
          {title}
        </CustomText>
        <ItemDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <View
          style={{
            width: "90%",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <ItemOtherDetails name={"Gluten-Free"} otherDetail={isGlutenFree} />
          <ItemOtherDetails name={"Vegan"} otherDetail={isVegan} />
          <ItemOtherDetails name={"Vegetarian"} otherDetail={isVegetarian} />
          <ItemOtherDetails name={"Lactose-Free"} otherDetail={isLactoseFree} />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "white",
          }}
        >
          <ItemSubtitle>Ingredients</ItemSubtitle>
          <List data={ingredients} />
        </View>
        <View
          style={{
            width: "90%",
          }}
        >
          <ItemSubtitle>Steps</ItemSubtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: "#2b2b2b",
  },
});
