import Todo from './Todo';

const TodoList = ({ todos, setTodos, counter, setCounter }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            counter={counter}
            setCounter={setCounter}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
