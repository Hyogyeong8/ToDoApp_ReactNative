import React from "react";
import styled from "styled-components/native";
import { useState } from "react";

const StyledInput = styled.TextInput.attrs(({ placeholder, theme }) => ({
  placeholder: placeholder || "Enter a text...",
  placeholderTextColor: theme.inputColor,
  color: theme.inputborder,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({ text, theme }) => (text ? "blue" : theme.inputBorder)};
`;

const Input = ({ placeholder }) => {
  const [text, setText] = useState("");

  return (
    <StyledInput
      onChangeText={(text) => setText(text)}
      text={text}
      placeholder={placeholder}
    />
  );
};

export default Input;
