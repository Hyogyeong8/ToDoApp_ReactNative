import React from "react";
import styled from "styled-components/native";
import Button from "../components/Button";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: lavenderblush;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Home = () => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button title="List"></Button>
    </Container>
  );
};

export default Home;
