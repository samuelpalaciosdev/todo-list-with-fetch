import '../Styles/Todo.css';

const Todo = ({ text, todo, todos, setTodos, counter, setCounter }) => {
  // Events functions

  const deleteTodo = () => {
    // Delete todo
    setTodos(todos.filter(elem => elem.id !== todo.id));
    // Decrement counter when trash button is clicked
    setCounter(counter - 1);
  };
  return (
    <div className="todo d-flex flex-row align-items-center">
      <li className="todo-item">{text}</li>
      <span
        onClick={deleteTodo}
        className="trash-btn d-flex align-items-center ms-auto"
      >
        <i className="fa-solid fa-x trash-icon"></i>
      </span>
    </div>
  );
};

export default Todo;
