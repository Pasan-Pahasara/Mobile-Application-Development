import { Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return <Text>This is the meal detail screen {mealId}</Text>;
};

export default MealDetailScreen;
