import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers/todoSlice";
import "./AllTodoForm.css";

const AllTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ id: Date.now(), text: input }));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your todo"
        className="todo-input"
      />
      <button type="submit" className="add-todo-btn">
        Add Todo
      </button>
    </form>
  );
};

export default AllTodoForm;
