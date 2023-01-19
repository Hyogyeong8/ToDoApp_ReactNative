import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, List, Chat } from "../screens"; // 폴더까지만 입력하면 폴더 아래에 있는 index.js를 가지고 온다.
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#eee" },
        headerStyle: {
          height: 120,
          backgroundColor: "lavender",
          borderBottomWidth: 5,
          borderBottomColor: "slateblue",
        },
        headerTitleStyle: {
          fontSize: 20,
          // color: 'slateblue',
        },
        headerTitleAlign: "center",
        headerTitle: ({ style, tintColor }) => {
          // console.log(props);
          return <FontAwesome5 name="react" style={style} color={tintColor} />;
        },
        headerTintColor: "maroon",
        headerBackTitle: "Prev",
        headerBackTitleStyle: { fontSize: 20 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "My List",
          headerBackImage: ({ tintColor }) => {
            return (
              <MaterialIcons
                name="keyboard-backspace"
                size={20}
                color={tintColor}
                style={{ margin: 10 }}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({ headerTitle: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
