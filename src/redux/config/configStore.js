import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from '../modules/todoReducer';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});
const store = createStore(rootReducer);

export default store;
