import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ todoList, setTodoList }) => {
  // value 값 데이터
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // value값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);

    setText('');
    inputRef.current.focus();
  };

  return (
    <div className="todoapp_inputbox">
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="todoapp_inputbox-inp"
        onChange={onChangeInput}
      />
      <button
        type="submit"
        className="todoapp_inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

InputBox.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default InputBox;
