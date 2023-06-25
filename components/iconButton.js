import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({onPress}) => {
return (
    <Pressable onPress={onPress}>
         <Ionicons name="ios-star-outline" size={24} color="white" />
    </Pressable>
);
};

export default IconButton;