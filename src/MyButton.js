import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

const MyButton = ({ title, onPress, children, subtitle }) => {
  // const MyButton = ({ title = "title", onPress = () => {}, children }) => {
  // 위와 같이 props의 기본값을 설정할 수 있다(1번 방법)
  // console.log(props);
  return (
    <TouchableOpacity
      onPress={onPress}
      // hitSlop={{ bottom: 10 }}
      // pressRetentionOffset={{ bottom: 10 }}
    >
      {/* 함수 담당 */}
      {/* hitSlop은 버튼 밖을 클릭해도 클릭이 되도록 한다 */}
      {/* PressRetentionOffset을 설정하면, 버튼을 누른 상태에서 설정된 범위를 벗어나면 클릭이 취소된다. */}
      <View style={{ backgroundColor: "#ddd", padding: 10, margin: 10 }}>
        {/* Button의 style 적용 */}
        {/* margin은 버튼 밖을 클릭해도 클릭이 되도록 한다 + 공간 차지 */}
        <Text style={{ fontsize: 20, color: "maroon" }}>
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// 아래와 같이 props의 기본값을 설정할 수 있다(2번 방법)
MyButton.defaultProps = {
  title: "default title",
  onPress: () => alert("default"),
};

// 아래와 같이 props의 type을 지정할 수 있다
MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  // 아래와 같이 필수로 받아와야 하는 props를 지정해줄 수 있다
  // subtitle: PropTypes.string.isRequired,
};

export default MyButton;
