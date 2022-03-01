import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Card = (props: Props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: Colors.background_card,
    padding: 16,
    borderRadius: 10,
  },
});

export type Props = {
  children: React.ReactNode;
  style?: {};
};

export default Card;
