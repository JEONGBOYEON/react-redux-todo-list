import { v4 as uuid } from "uuid";
import { ADD_TODO, TOGGLE, DELETE_TODO } from "./action";

const initialTodos = [
  {
    id: uuid(),
    todo: "리액트 공부하기",
    completed: false,
  },
  {
    id: uuid(),
    todo: "블로그 쓰기",
    completed: false,
  },
];

// 리듀서 함수
function todos(state = initialTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          todo: action.todo,
          completed: false,
        },
      ];
    case TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
export default todos;
