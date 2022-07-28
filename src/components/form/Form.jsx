import React from 'react';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  const onClickDeleteButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      deleted: item.id === todoItem.id ? true : item.deleted,
    }));
    setTodoList(nextTodoList);
  };

  return (
    <li className="todoapp_item">
      <input
        type="checkbox"
        className="todoapp_item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />

      <span
        className={`todoapp_item-ctx ${
          todoItem.checked ? 'todoapp_item-ctx-checked' : ''
        }`}
      >
        {todoItem.text}
      </span>
      {/* {!todoItem.checked ? (
        <button type="button" className="todoapp__item-edit-btn"></button>
      ) : null} */}

      <button
        type="button"
        className="todoapp_item-delete-btn"
        onClick={onClickDeleteButton}
      >
        🗑
      </button>
    </li>
  );
};
export default ToDoItem;
