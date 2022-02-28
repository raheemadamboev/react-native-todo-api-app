import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";

const ProgressBar = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Progress.CircleSnail
        color={Colors.primary}
        size={45}
        thickness={4}
        indeterminate={true}
        spinDuration={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {},
});

export type Props = {};

export default ProgressBar;
