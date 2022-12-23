import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert("MyButton works!")}
      // hitSlop={{ bottom: 10 }}
      // pressRetentionOffset={{ bottom: 10 }}
    >
      {/* 함수 담당 */}
      {/* hitSlop은 버튼 밖을 클릭해도 클릭이 되도록 한다 */}
      {/* PressRetentionOffset을 설정하면, 버튼을 누른 상태에서 설정된 범위를 벗어나면 클릭이 취소된다. */}
      <View style={{ backgroundColor: "#ddd", padding: 10, margin: 10 }}>
        {/* Button의 style 적용 */}
        {/* margin은 버튼 밖을 클릭해도 클릭이 되도록 한다 + 공간 차지 */}
        <Text style={{ fontsize: 20, color: "maroon" }}>My Button</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
