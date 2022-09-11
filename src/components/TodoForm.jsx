import { addTodo } from "../moduls/action";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const addNewTodo = (e, newTodo) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    e.target[0].value = "";
  };

  return (
    <form
      className="TodoForm"
      onSubmit={(e) => addNewTodo(e, e.target[0].value)}
    >
      <input type="text" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
