import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, List, Chat } from "../screens"; // 폴더까지만 입력하면 폴더 아래에 있는 index.js를 가지고 온다.

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#eee" } }}
    >
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ cardStyle: { backgroundColor: "#fff" } }}
      />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default StackNav;
