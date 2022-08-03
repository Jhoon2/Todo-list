import React from 'react';
import { useDispatch } from 'react-redux';
import { todoRemove, todoToggle } from '../../redux/modules/todoReducer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToDoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/detail/${todo.id}`);
  };

  return (
    <TodoItem>
      <TodoitemCheckbox
        type="checkbox"
        className="todoapp_item-checkbox"
        onClick={() => dispatch(todoToggle(id))}
        checked={checked}
        onChange={todoToggle}
      />

      <TextBox>
        <TextButton type="button" onClick={onClick} checked={checked}>
          {text}
        </TextButton>
      </TextBox>

      <TodoitemDeleteButton
        type="button"
        onClick={() => dispatch(todoRemove(id))}
      >
        🗑
      </TodoitemDeleteButton>
    </TodoItem>
  );
};
export default ToDoItem;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 36px;
  & :last-child {
    margin-bottom: 0;
  }
`;

const TodoitemCheckbox = styled.input`
  margin-right: 10px;
  color: ${(props) => props.color || 'gray'};
`;

const TextBox = styled.span`
  flex: 1;
`;

const TextButton = styled.button`
  border: none;
  border-radius: 0;
  height: 36px;
  background: none;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  color: ${(checked) => (checked.checked ? 'gray' : 'black')};
  font-style: ${(checked) => (checked.checked ? 'italic' : ' ')};

  &:hover {
    cursor: pointer;
    background-color: #d0ebff;
  }
`;

const TodoitemDeleteButton = styled.button`
  border: none;
  border-radius: 0;
  height: 36px;
  width: 36px;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    background-color: #d0ebff;
  }
`;
