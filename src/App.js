import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Input from "./component/Input";
import Task from "./component/Task";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export default function App() {
  const [newTask, setNewTask] = useState("");

  const tempData = {
    1: { id: "1", text: "React Native", completed: false },
    2: { id: "2", text: "Expo ", completed: true },
    3: { id: "3", text: "JavaScript", completed: false },
  };

  const [tasks, setTasks] = useState(tempData);

  const addTask = () => {
    if (newTask.length < 1) return;
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask("");
    setTasks({ ...tasks, ...newTaskObject });
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["completed"] = !currentTasks[id]["completed"];
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>ToDO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
