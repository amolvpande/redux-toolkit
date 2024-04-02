import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./reducers/todoSlice";
import "./AllTodoList.css";

const AllTodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditText(text);
    setEditingId(id);
  };

  const handleSave = (id) => {
    dispatch(
      updateTodo({
        id: id,
        text: editText,
      })
    );
    setEditingId(null);
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
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
        </div>
      ))}
    </div>
  );
};

export default AllTodoList;
