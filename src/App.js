import React from 'react';
import './App.css';
import Home from './components/pages/TodoList';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/detail/Detail';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/detail/:id" element={<Detail />}></Route>
  </Routes>
);

export default App;
