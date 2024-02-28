import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from './../screens/MealDetailsScreen';
import MealsOverviewScreen from './../screens/MealsOverviewScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MealsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        headerShown: false,
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#222",
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#ddd",
          },
        },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
      />
      <Stack.Screen
        name="Meals"
        component={MealsOverviewScreen}
        options={({ route, navigation }) => {
          const catName = route.params.catTitle;
          return {
            title: catName,
          };
        }}
      />
      <Stack.Screen
        name={"MealDetails"}
        component={MealDetailsScreen}
        options={({ route, navigation }) => {
          const catName = route.params.title;
          return {
            title: "About the Meal",
            headerShown: true
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigation

const styles = StyleSheet.create({})