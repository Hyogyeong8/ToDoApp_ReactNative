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
      <MyButton title="MyButton 1" onPress={() => alert("1")} />
      <MyButton title="MyButton 2" onPress={() => alert("2")}>
        MyButton3
      </MyButton>
      <MyButton>MyChildren</MyButton>
      <MyButton />
      {/* <MyButton title={12} onPress={() => alert("3")} /> */}
      {/* 위의 숫자 12 버튼은 title의 type이 string이 아니면 
      warning을 띄운다는 것을 보여주기 위함이다 */}
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
