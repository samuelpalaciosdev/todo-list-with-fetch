import { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  return (
    <div className="main-container">
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
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
