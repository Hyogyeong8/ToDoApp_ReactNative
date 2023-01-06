import React, { createContext } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import User from "./components/User";
import { UserProvider } from "./context/User";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <UserProvider>
      <Container>
        <User />
        <StatusBar style="auto" />
      </Container>
    </UserProvider>
  );
}
