import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MyButton from "./MyButton";
import CounterButton from "./CounterButton";

export default function App() {
  // const [version, setVersion] = useState(0);
  // setVersion(version++);
  // // version은 readonly라는 error 있음
  console.log("Print here!!");
  // console.log({ version });

  const name = "Diana";

  // 인프런 state 강좌
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>Hello, {name}</Text>
      <StatusBar style="auto" />

      {/* 인프런_커스텀 컴포넌트 강좌 */}
      <Button title="Login" onPress={() => alert("Step to login")} />
      <MyButton title="MyButton 1" onPress={() => alert("1")} />

      {/* 인프런 props 강좌 */}
      {/* <MyButton title="MyButton 2" onPress={() => alert("2")}>
        MyButton3
      </MyButton>
      <MyButton>MyChildren</MyButton>
      <MyButton /> */}
      {/* 아래의 숫자 12 버튼은 title의 type이 string이 아니면 
      warning을 띄운다는 것을 보여주기 위함이다 */}
      {/* <MyButton title={12} onPress={() => alert("3")} /> */}

      {/* 인프런 state, event 강좌 */}
      {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
      <Text style={{ fontSize: 20 }}>{multiple}</Text>
      <CounterButton
        title="addition"
        onPress={() => setAddition(addition + 2)}
      />
      <CounterButton
        title="multiple"
        onPress={() => setMultiple(multiple * 2)}
      />
      <CounterButton /> */}

      {/* 인프런 event 강좌 */}
      <TextInput
        // onChange={(event) => console.log(event.nativeEvent)}
        onChangeText={(text) => console.log(text)}
        onFocus={(event) => console.log("focus")}
        onBlur={(event) => console.log("blur")}
        style={{ borderWidth: 1, padding: 10, fontSize: 14 }}
      />
      <TextInput
        // onChange={(event) => console.log(event.nativeEvent)}
        onChangeText={(text) => console.log(text + " 1")}
        onFocus={(event) => console.log("focus 2")}
        style={{ borderWidth: 1, padding: 10, fontSize: 14 }}
      />
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
