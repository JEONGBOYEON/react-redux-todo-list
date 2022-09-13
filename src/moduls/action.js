export const ADD_TODO = "ADDTODO";
export const TOGGLE = "TOGGLE";
export const DELETE_TODO = "DELETETODO";

// 액션생성 함수
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
