import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Diana</Text>
      <Button title="MyButton" onPress={() => alert("It works!")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
