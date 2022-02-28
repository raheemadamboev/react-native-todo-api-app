import { FlatList, StyleSheet, View, Text } from "react-native";
import Colors from "./constants/Colors";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";
import ToDoList from "./screens/ToDoList";

export default function App() {
  return (
    <View style={styles.screen}>
     <ToDoList/>
    </View>
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
