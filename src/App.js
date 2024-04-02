import React from "react";
import "./App.css";
import AllTodoList from "./AllTodoList";
import AllTodoForm from "./AllTodoForm";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <AllTodoForm />
      <AllTodoList />
    </div>
  );
}

export default App;
