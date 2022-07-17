import '../Styles/Form.css';
const TodoForm = () => {
  return (
    <div className="form-container text-center">
      <h1 className="display-2">Todos</h1>
      <form>
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
        />
        <button type="submit" className="todo-btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
