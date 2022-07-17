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
        {counter !== 0 ? (
          <li className="counter mt-4">{counter} items left</li>
        ) : (
          <li className="counter mt-4">No tasks, add a task</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
