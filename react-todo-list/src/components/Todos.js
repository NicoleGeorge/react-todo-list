const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.text}</h3>
      ))}
    </>
  );
};

export default Todos;
