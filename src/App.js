import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { styles, orangeText } from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Diana</Text>
      <Text style={styles.errorText}>Error message</Text>
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
  text: {
    backgroundColor: "#e1f6fc",
    color: "#162529",
    fontsize: 20,
  },
  errorText: {
    color: "red",
  },
});
