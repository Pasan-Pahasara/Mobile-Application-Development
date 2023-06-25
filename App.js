import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//start drawer navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};
//end drawer navigator

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* default ganna screen eka thamai udinma thina eka, nattam apita initialRouteName kiyala default ganna ona eka dennath puluvan*/}
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: "Meals Overview" }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={
              {
                // title: "Meal Details",
                // headerRight: () => (
                //   <Button title="Tap Me!" />
                // ),
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
