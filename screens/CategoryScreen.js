import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default CategoryScreen;
