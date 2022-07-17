import { useState } from 'react';
import TodoForm from './Components/TodoForm';

const App = () => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default App;
