import React from "react";
import { ACTIONS } from "./ToDoList";
export default function Todo({ todoData, dispatch }) {
  // defining toggle function
  const handleToggle = () =>
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoData.id } });
  // defining delete function
  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoData.id } });
  };
  return (
    <div className="todo">
      <div className="todo-user-text">
        <span style={{ color: todoData.completed ? "#aaa" : "#000" }}>
          {todoData.name}
        </span>
      </div>
      <div className="todo-btn">
        <button onClick={handleToggle} className="todo-btn-toggle">
          Toggle
        </button>
        <button onClick={handleDelete} className="todo-btn-del">
          Delete
        </button>
      </div>
    </div>
  );
}
