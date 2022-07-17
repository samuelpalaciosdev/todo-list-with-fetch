import '../Styles/Form.css';
const TodoForm = ({ todos, setTodos, inputValue, setInputValue }) => {
  // Events functions

  const inputTextHandler = e => {
    // Grab the text of the input and set it to the inputValue state
    setInputValue(e.target.value);
  };

  const submitTodo = e => {
    // Cancel submit
    e.preventDefault();
    // When form submited, add todo to an object with its text and an id
    setTodos([
      ...todos,
      {
        text: inputValue,
        id: Math.round(Math.random() * 1000),
      },
    ]);
    // Reset input when submitted
    setInputValue('');
  };

  return (
    <div className="form-container text-center">
      <h1 className="display-2">Todos</h1>
      <form>
        <input
          value={inputValue}
          type="text"
          onChange={inputTextHandler}
          className="todo-input"
          placeholder="What needs to be done?"
        />
        <button type="submit" onClick={submitTodo} className="todo-btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
