// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "./reducers/todoSlice";
// import "./AllTodoForm.css";

// const AllTodoForm = () => {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       dispatch(addTodo({ id: Date.now(), text: input }));
//       setInput("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="todo-form">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter your todo"
//         className="todo-input"
//       />
//       <button type="submit" className="add-todo-btn">
//         Add Todo
//       </button>
//     </form>
//   );
// };

// export default AllTodoForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers/todoSlice";
import "./AllTodoForm.css";

const AllTodoForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      setError("*Todo text cannot be blank.");
    } else if (!/\S/.test(trimmedInput)) {
      setError("Todo text cannot consist only of spaces.");
    } else if (trimmedInput.indexOf(" ") !== -1) {
      setError("*No spaces allowed.");
    } else {
      dispatch(addTodo({ id: Date.now(), text: trimmedInput }));
      setInput("");
      setError("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter your todo"
          className="todo-input"
        />
        <button type="submit" className="add-todo-btn">
          Add Todo
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default AllTodoForm;
