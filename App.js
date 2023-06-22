// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(''); 
  const [courseGoals, setCourseGoals] = useState([]); 

  const goalInputHandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, enteredGoalText])
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <View>
    //     <Text style={{ margin: 16, borderColor: 'red' }}>Hello World 1!</Text>
    //     <Text style={styles.dummyText}>Hello World 2!</Text>
    //   </View>
    //   <Button title="Click Me!" />
    // </View>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Cource Goal" onChangeText={goalInputHandler}/>
        <Button title="ADD GOAL" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
        {
          courseGoals.map((goal)=><Text key={goal}>{goal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: "red",
  // },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalContainer: {
    flex: 4,
  },
});
