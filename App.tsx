import { StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  return (
    <View style={styles.screen}>
      <ProgressBar />
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
