import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { ToDo } from "../App";
import ProgressBar from "../components/ProgressBar";
import Colors from "../constants/Colors";
import ToDoCard from "../components/ToDoCard";

const ToDoList = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [error, setError] = useState<string>("");

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
          <ToDoCard name={todo.item.title} completed={todo.item.completed} />
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
  },
  errorText: {
    fontSize: 15,
    color: Colors.text_error,
  },
});

export type Props = {};

export default ToDoList;
