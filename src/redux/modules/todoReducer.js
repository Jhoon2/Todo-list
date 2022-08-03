const TODO_INSERT = 'TODO_INSERT';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';

export const todoInsert = (id, text) => {
  return {
    type: TODO_INSERT,
    payload: {
      id: id,
      text: text,
      checked: false,
    },
  };
};

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    payload: { id: id },
  };
};

export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    payload: { id: id },
  };
};

const initState = {
  todos: [],
};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          checked: false,
        }),
      };

    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, checked: !todo.checked } : todo
        ),
      };

    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };

    default:
      return { ...state };
  }
};

export default todoReducer;
