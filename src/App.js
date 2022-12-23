import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./MyButton";

export default function App() {
  // console.log("Print here!");
  const name = "Diana";
  return (
    <View style={styles.container}>
      <Text>Hello, Diana</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={() => alert("Step to login")} />
      <MyButton />
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
