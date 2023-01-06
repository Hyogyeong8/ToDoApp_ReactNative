import React, { createContext } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  const UserContext = createContext({ name: "Diana" });
  return (
    <UserContext.Provider value={{ name: "Diana Kim" }}>
      <Container>
        <UserContext.Consumer>
          {(value) => {
            console.log(value);
            return <StyledText>{value?.name}</StyledText>;
          }}
        </UserContext.Consumer>
        <StatusBar style="auto" />
      </Container>
    </UserContext.Provider>
  );
}
