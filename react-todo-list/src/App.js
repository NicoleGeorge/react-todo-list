import Header from './components/Header';
import Todos from './components/Todos';
import { useState } from 'react';

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
      text: 'Buy Cffee',
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
    console.log('delete', id);
  };

  return (
    <div className="container">
      <Header />
      <Todos todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
