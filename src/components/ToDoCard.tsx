import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Card from "./Card";
import { ToDo } from "../../App";

const ToDoCard = (props: Props) => {
  let image;
  if (props.todo.completed) {
    image = require("../images/checked.png");
  } else {
    image = require("../images/process.png");
  }

  return (
    <TouchableOpacity
      onPress={props.onToDoClick.bind(this, props.todo)}
      activeOpacity={0.3}
    >
      <Card style={styles.card}>
        <Text style={styles.text}>{props.todo.title}</Text>
        <Image style={styles.image} source={image} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginStart: 10,
    marginEnd: 10,
    marginTop: 4,
    width: "100%",
    marginBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    width: "70%",
  },
  image: {
    width: 20,
    height: 20,
  },
});

export type Props = {
  todo: ToDo;
  onToDoClick: (todo: ToDo) => void;
};

export default ToDoCard;
