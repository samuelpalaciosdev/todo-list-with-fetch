import '../Styles/Todo.css';

const Todo = ({ text }) => {
  return (
    <div className="todo d-flex flex-row align-items-center">
      <li className="todo-item">{text}</li>
      <span className="trash-btn d-flex align-items-center ms-auto">
        <i className="fa-solid fa-x trash-icon"></i>
      </span>
    </div>
  );
};

export default Todo;
