const todos = [
  {
    id: 1,
    text: "Make Hair Appointment",
    day: "March 20 at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Code Blog-Shop Application",
    day: "March 21 at 11:00am",
    reminder: true,
  },
  {
    id: 3,
    text: "Buy Cffee",
    day: "March 22 at 7:30am",
    reminder: true,
  },
  {
    id: 4,
    text: "Update Portfolio Website",
    day: "March 23 at 4:30pm",
    reminder: false,
  },
];

const Todos = () => {
  return (
    <>
      {todos.map((todo) => (
        <h3>{todo.text}</h3>
      ))}
    </>
  );
};

export default Todos;