import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: lavender;
  color: slateblue;
  padding: 10px;
  margin: 5px;
  width: auto;
`;

const StyledText = styled.Text`
  color: slateblue;
  font-size: 20px;
  font-weight: 400;
`;

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <StyledText>{title}</StyledText>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
