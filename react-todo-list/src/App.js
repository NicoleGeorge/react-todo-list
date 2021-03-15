import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Make Hair Appointment',
      day: 'March 20 at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Code Blog-Shop Application',
      day: 'March 21 at 11:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Buy Coffee',
      day: 'March 22 at 7:30am',
      reminder: true,
    },
    {
      id: 4,
      text: 'Update Portfolio Website',
      day: 'March 23 at 4:30pm',
      reminder: false,
    },
  ]);

  // DELETE Todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // console.log('delete', id);
  };

  // TOGGLE Reminder notification
  const toggleReminder = (id) => {
    // console.log(id)
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTodo />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} />
      ) : (
        'Nothing to do today!'
      )}
    </div>
  );
};

export default App;
