import React, { useLayoutEffect } from "react";
import styled from "styled-components/native";
import Button from "../components/Button";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Chat = ({ route, navigation }) => {
  return (
    <Container>
      <StyledText>Chat</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <StyledText>{route.params.name}</StyledText>
      <Button
        title="Home"
        onPress={() =>
          navigation.reset({ routes: [{ name: "Home" }, { name: "List" }] })
        }
      />
    </Container>
  );
};

export default Chat;
