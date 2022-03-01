import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { MyStackParamList, ToDo } from "../../App";
import ProgressBar from "../components/ProgressBar";
import Colors from "../constants/Colors";
import ToDoCard from "../components/ToDoCard";
import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate({
      key: name,
    });
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

type navigationType = NativeStackNavigationProp<MyStackParamList, "ToDoList">

const ToDoList = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [error, setError] = useState<string>("");

  const navigation = useNavigation<navigationType>();

  const onToDoClick = (todo: ToDo) => {
    navigate("ToDo")
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setTodos(json as ToDo[]))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  let content;
  if (loading) {
    content = <ProgressBar />;
  } else if (error !== "") {
    content = <Text style={styles.errorText}>{error}</Text>;
  } else if (todos.length > 0) {
    content = (
      <FlatList
        data={todos}
        renderItem={(todo) => (
          <ToDoCard todo={todo.item} onToDoClick={onToDoClick} />
        )}
      />
    );
  }

  return <View style={styles.screen}>{content}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  errorText: {
    fontSize: 15,
    color: Colors.text_error,
  },
});

export type Props = {};

export default ToDoList;
