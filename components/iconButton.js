import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress }) => {
  return (
    // object destructuring use karala pressed kiyana variable eka ganna puluwan mekedi palaveni eka true nm dewani eka return karannawa.
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="ios-star-outline" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
