import { StatusBar } from "expo-status-bar";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Meals Categories">
           {/* default ganna screen eka thamai udinma thina eka, nattam apita initialRouteName kiyala default ganna ona eka dennath puluvan*/}
          <Stack.Screen name="Meals Categories" component={CategoryScreen} />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
