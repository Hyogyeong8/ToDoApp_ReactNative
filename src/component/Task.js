import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { icons } from "../icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  /* width: ${({ width }) => width - 40}px; */
  height: 60px;
  margin: 3px 20px;
  padding: 5px;
  border-radius: 10px;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

const Task = ({ item, deleteTask, toggleTask }) => {
  return (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        item={item}
        onPress={toggleTask}
      />
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || <IconButton icon={icons.edit} />}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Task;
