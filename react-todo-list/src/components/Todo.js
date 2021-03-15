import { FaTimes } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <h3>{todo.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} /></h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
