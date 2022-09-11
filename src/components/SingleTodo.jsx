import { BsCircle, BsCheckCircle, BsXCircleFill } from "react-icons/bs";
import { deleteTodo, toggle } from "../moduls/action";
import { useDispatch } from "react-redux";

export default function SingleTodo({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      className="SingleTodo"
      onClick={() => {
        dispatch(toggle(todo.id));
      }}
    >
      <div>
        {todo.completed ? <BsCheckCircle /> : <BsCircle />}
        <div style={completed(todo.completed)}>{todo.todo}</div>
      </div>
      <button
        className="deleteBtn"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        {todo.completed ? <BsXCircleFill /> : ""}
      </button>
    </li>
  );
}

function completed(boolean) {
  if (boolean === true) {
    return { textDecoration: "line-through", color: "#d3d3d3" };
  } else {
    return { textDecoration: "" };
  }
}
