import { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

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
      <TodoList inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

export default App;
