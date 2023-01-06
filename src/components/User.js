import React, { useState } from "react";
import styled from "styled-components/native";
import { UserConsumer } from "../context/User";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #000000;
  font-size: 24px;
  padding: 10px;
  width: 100%;
`;

const User = () => {
  const [text, setText] = useState("");

  return (
    <>
      <UserConsumer>
        {({ name }) => <StyledText>Name: {name}</StyledText>}
      </UserConsumer>
      <UserConsumer>
        {({ setName }) => (
          <StyledInput
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => {
              setName(text);
              setText("");
            }}
          />
        )}
      </UserConsumer>
    </>
  );
};

export default User;
