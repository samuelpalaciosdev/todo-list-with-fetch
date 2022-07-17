import { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <div className="main-container">
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
      />
      <TodoList
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default App;
