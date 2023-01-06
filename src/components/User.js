import React from "react";
import styled from "styled-components/native";
import { UserConsumer } from "../context/User";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const User = () => {
  return (
    <UserConsumer>
      {({ name }) => <StyledText>Name: {name}</StyledText>}
    </UserConsumer>
  );
};

export default User;
