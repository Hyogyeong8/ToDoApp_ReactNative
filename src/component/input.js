import React from "react";
import styled from "styled-components/native";
import { Dimensions, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  // const width = Dimensions.get("window").width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapital="none" // 자동으로 대문자로 바뀌는 기능 끄기
      autoCorrect={false} // 자동 오타 수정 기능 끄기
      returnKeyType="done" // iOS에서 return키를 done으로 나오게 설정
      keyboardAppearance="dark" // iOS에서만 키보드 색상을 어둡게 변경
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
