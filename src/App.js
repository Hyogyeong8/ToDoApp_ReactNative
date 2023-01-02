import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles, orangeText } from "./style";
import Box from "./Box";
import Shadow from "./Shadow";
import styled, { css } from "styled-components/native";

// styled-component 강의 start

// Tagged Template Literals
const Container = styled.View`
  flex: 1;
  background-color: maroon;
  align-items: center;
  justify-content: center;
`;

// 상속 1번 방법
// const StyledText = styled.Text`
//   margin: 5px;
//   font-size: 20px;
//   font-weight: 500;
//   color: white;
// `;

// const ErrorText = styled(StyledText)`
//   color: yellow;
// `;

// 상속 2번 방법
const cssText = css`
  margin: 5px;
  font-size: 20px;
  font-weight: 500;
`;

const StyledText = styled.Text`
  ${cssText}
  color: white;
`;

const ErrorText = styled.Text`
  ${cssText}
  color: yellow;
`;

// TouchableOpacity
const StyledButton = styled.TouchableOpacity`
  margin: 5px;
  width: 100px;
  height: 40px;
  background-color: darkgreen;
  align-items: center;
  justify-content: center;
`;

// styled-component 강의 end

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* 스타일링 강의 */}
    //   {/* <Text style={[styles.text, orangeText]}>Hello, Diana</Text>
    //   <Text style={[styles.text, styles.errorText]}>Error message</Text> */}

    //   {/* flexbox 강의 */}
    //   {/* <Box style={{ backgroundColor: "blue", flex: 1 }} />
    //   <Box style={{ backgroundColor: "white", flex: 1 }} />
    //   <Box style={{ backgroundColor: "red", flex: 1 }} /> */}

    //   {/* shadow 강의 */}
    //   {/* <Shadow /> */}
    //   <StatusBar style="auto" />
    // </View>

    // styled-component 강의
    <Container>
      <StyledText>Styled-Component</StyledText>
      <ErrorText>Error!!</ErrorText>
      <StyledButton onPress={() => alert("Click!")}>
        <StyledText>Login</StyledText>
      </StyledButton>
      <StatusBar style="auto" />
    </Container>
  );
}
