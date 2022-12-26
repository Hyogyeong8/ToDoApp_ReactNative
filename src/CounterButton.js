import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropsTypes from "prop-types";

const CounterButton = ({ title, onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("press");
        onPress();
      }}
      onPressIn={() => console.log("in")}
      onPressOut={() => console.log("out")}
      onLongPress={() => console.log("long")}
      delayLongPress={3000} // 3초
    >
      <View style={{ backgroundColor: "#d7e1fa", padding: 10, margin: 10 }}>
        <Text style={{ color: "#30027a", fontSize: 18 }}>
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CounterButton.defaultProps = {
  title: "Default Title",
  onPress: () => {},
};

export default CounterButton;
