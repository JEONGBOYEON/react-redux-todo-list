import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const List = () => {
  const todos = useSelector((state) => state);

  return (
    <div className="List">
      <TodoForm />
      <ul className="todo-list">
        {todos.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
