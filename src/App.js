import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles, orangeText } from "./style";
import Box from "./Box";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 스타일링 강의 */}
      {/* <Text style={[styles.text, orangeText]}>Hello, Diana</Text>
      <Text style={[styles.text, styles.errorText]}>Error message</Text> */}

      {/* flexbox 강의 */}
      <Box style={{ backgroundColor: "blue", flex: 1 }} />
      <Box style={{ backgroundColor: "white", flex: 1 }} />
      <Box style={{ backgroundColor: "red", flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}
