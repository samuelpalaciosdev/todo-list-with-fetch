import '../Styles/Form.css';
const TodoForm = ({
  todos,
  setTodos,
  inputValue,
  setInputValue,
  counter,
  setCounter,
  errorMsg,
  setErrorMsg,
}) => {
  // Events functions

  const inputTextHandler = e => {
    // Grab the text of the input and set it to the inputValue state
    setInputValue(e.target.value);
  };

  const submitTodo = e => {
    // Cancel submit
    e.preventDefault();
    // If input is not empty
    if (inputValue.trim()) {
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
      // Increment counter on submit
      setCounter(counter + 1);
      // Do not display any error message
      setErrorMsg('');
    } else {
      // Display error message
      setErrorMsg('Input should be filled');
    }
  };

  return (
    <div className="form-container text-center mt-5">
      <h1 className="display-2">Todos</h1>
      <form onSubmit={submitTodo}>
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
      <small className="error-msg text-danger fw-semibold">{errorMsg}</small>
    </div>
  );
};

export default TodoForm;
