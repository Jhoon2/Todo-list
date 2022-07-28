import React from 'react';
import ToDoItem from '../form/Form';

const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp_list">
    <p className="todoapp_list-tit">{title}</p>

    <ul className="todoapp_list-ul">
      {todoList &&
        todoList.map((todoItem) => {
          if (todoItem.deleted) return null;
          if (checkedList !== todoItem.checked) return null;

          return (
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

export default ToDoItemList;
