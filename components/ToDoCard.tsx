import React from "react";
import { StyleSheet, Text } from "react-native";
import Card from "./Card";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ToDoCard = (props: Props) => {
  return (
    <Card style={styles.card}>
      <Text style={{
          marginEnd: 10
      }}>{props.name}</Text>
      <FontAwesome name="rocket" size={30} color="#900" />
    </Card>
  );
};

const styles = StyleSheet.create({
    card: {
        marginStart: 10,
        marginEnd: 10,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        justifyContent: "space-between"
      }
});

export type Props = {
  name: string;
  completed: boolean;
};

export default ToDoCard;
