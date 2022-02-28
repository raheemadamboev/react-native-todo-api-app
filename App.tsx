import { FlatList, StyleSheet, View, Text } from "react-native";
import Colors from "./constants/Colors";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
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

  return (
    <View style={styles.screen}>
      <FlatList
        data={todos}
        renderItem={(item) => <Text>{item.item.title}</Text>}
      />
      <ProgressBar loading={loading} error={error} />
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

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
