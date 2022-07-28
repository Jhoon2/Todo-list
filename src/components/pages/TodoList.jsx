import React, { useState } from 'react';
import InputBox from '../todo/Todo';
import ToDoItemList from '../list/List';
import Header from '../header/Header';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage_container">
      <Header />
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      <ToDoItemList
        title={'🔥할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />

      <ToDoItemList
        title={'✅완료한 항목'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};

export default Home;
