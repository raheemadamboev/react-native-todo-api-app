import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";

const ProgressBar = (props: Props) => {
  let progressBar;
  let errorText;

  if (props.loading) {
    progressBar = (
      <Progress.CircleSnail
        color={Colors.primary}
        size={45}
        thickness={4}
        indeterminate={true}
        spinDuration={3000}
      />
    );
  }

  if (props.error !== "") {
    errorText = <Text style={styles.error}>{props.error}</Text>;
  }

  return (
    <View style={styles.screen}>
      {progressBar}
      {errorText}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 15,
    color: Colors.text_error,
  },
});

export type Props = {
  loading: boolean;
  error: string;
};

export default ProgressBar;
