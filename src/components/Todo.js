import React from "react";

export default function Todo({ todoData, dispatch }) {
  return (
    <div className="todo">
      <div className="todo-user-text">
        <span style={{ color: todoData.completed ? "#AAA" : "#000" }}>
          {todoData.name}
        </span>
      </div>
      <div className="todo-btn">
        <button className="todo-btn-toggle">Toggle</button>
        <button className="todo-btn-del">Delete</button>
      </div>
    </div>
  );
}
