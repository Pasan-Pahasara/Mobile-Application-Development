import { StatusBar } from "expo-status-bar";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#3514" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* default ganna screen eka thamai udinma thina eka, nattam apita initialRouteName kiyala default ganna ona eka dennath puluvan*/}
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{ title: "Meals Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: "Meals Overview" }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              // title: "Meal Details",
              // headerRight: () => (
              //   <Button title="Tap Me!" />
              // ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
