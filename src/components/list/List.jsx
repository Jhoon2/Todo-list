import React from 'react';
import ToDoItem from '../form/Form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ToDoItemList = ({ title, checkedList }) => {
  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <Todolist>
      <TodolistTitle>{title}</TodolistTitle>

      <TodolistUl>
        {todos &&
          todos.map((todo) => {
            if (checkedList !== todo.checked) return null;
            return <ToDoItem key={todo.id} todo={todo} />;
          })}
      </TodolistUl>
    </Todolist>
  );
};

export default ToDoItemList;

const Todolist = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodolistTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const TodolistUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;
