import React from "react";

const Todo = ({ text, id, completed, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const handleCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          //Le estamos diciendo que queremos cambiar el estado
          //Del indice completed al estado contrario en el que se encuetra
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={handleCompleted}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
