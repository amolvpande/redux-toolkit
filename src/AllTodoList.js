import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./reducers/todoSlice";
import "./AllTodoList.css";

const AllTodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditText(text);
    setEditingId(id);
    setError("");
  };

  const handleSave = (id) => {
    const trimmedText = editText.trim();
    if (trimmedText === "") {
      setError("Todo text cannot be blank.");
    } else if (!/\S/.test(trimmedText)) {
      setError("Todo text cannot consist only of spaces.");
    } else {
      dispatch(
        updateTodo({
          id: id,
          text: trimmedText,
        })
      );
      setEditingId(null);
      setError("");
    }
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
    setError(""); // Clear error message when input changes
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editingId === todo.id ? (
            <>
              <input type="text" value={editText} onChange={handleChange} />
              <div className="button-group">
                <button
                  className="save-button"
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <div className="button-group">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
          {error && <div className="error-message">{error}</div>}
        </div>
      ))}
    </div>
  );
};

export default AllTodoList;
