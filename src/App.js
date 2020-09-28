import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  //Storage todos to show on screen
  const [filter, setFilter] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffect
  useEffect(() => {
    handleFilter();
    SaveLocalTodos();
  }, [todos, status]);

  //function
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const SaveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Thank you next</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList setTodos={setTodos} todos={filter} />
    </div>
  );
}

export default App;
