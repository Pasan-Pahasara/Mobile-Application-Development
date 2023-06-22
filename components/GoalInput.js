import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Cource Goal"
        onChangeText={goalInputHandler}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
