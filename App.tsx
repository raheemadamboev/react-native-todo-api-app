import { StyleSheet, View } from "react-native";
import Colors from "./src/constants/Colors";
import ToDoList, { navigationRef } from "./src/screens/ToDoList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoScreen from "./src/screens/ToDoScreen";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.screen}>
        <ToDoList />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background_layout,
    justifyContent: "center",
    alignItems: "center",
  },
});

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type MyStackParamList = {
  ToDoList: undefined,
  ToDo: ToDo
}

const Stack = createNativeStackNavigator<MyStackParamList>();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="ToDo" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
