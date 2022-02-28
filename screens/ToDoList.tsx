import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { ToDo } from "../App";
import ProgressBar from "../components/ProgressBar";

const ToDoList = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json as ToDo[]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return <View style={styles.screen}>
       <FlatList
        data={todos}
        renderItem={(item) => <Text>{item.item.title}</Text>}
      />
      <ProgressBar loading={loading} error={error} />
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export type Props = {};

export default ToDoList;
