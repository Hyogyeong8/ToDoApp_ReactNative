import React from "react";
import styled from "styled-components/native";

const StyledButton = styled.TouchableOpacity`
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
    <StyledButton onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default Button;
