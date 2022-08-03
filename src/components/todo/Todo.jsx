import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoInsert } from '../../redux/modules/todoReducer';
import styled from 'styled-components';

const InputBox = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const nextId = useRef(0);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickAddButton();
    }
  };

  const onClickAddButton = () => {
    dispatch(todoInsert(nextId.current, text, nextId));
    nextId.current += 1;
    setText('');
    console.log(nextId, text);
  };

  return (
    <TodoInputBox>
      <TodoInputBoxInp
        type="text"
        name="todoItem"
        value={text}
        placeholder="할 일을 입력해주세요"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <TodoInputboxAddBtn type="submit" onClick={onClickAddButton}>
        추가
      </TodoInputboxAddBtn>
    </TodoInputBox>
  );
};

export default InputBox;

const TodoInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TodoInputBoxInp = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid #f1f3f5;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const TodoInputboxAddBtn = styled.button`
  border: none;
  border-radius: 0;
  background-color: #d0ebff;
  color: #1c7ed6;
  height: 50px;
  width: 50px;
  font-weight: bold;
`;
