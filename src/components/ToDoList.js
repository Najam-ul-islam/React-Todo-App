import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "Add",
  DELETE_TODO: "Del",
  TOGGLE_TODO: "Toggle"
  // EDIT_TODO:,
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    completed: false
  };
};
export default function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    // After submitting value in text field clear the input field
    setName("");
  };

  return (
    <div className="todo-list">
      <h1>Todo App</h1>
      <form onSubmit={onSubmitHandler}>
        <input value={name} onChange={setNameHandler}></input>
      </form>
      {todos.map((todoData) => {
        return (
          <Todo key={todoData.id} todoData={todoData} dispatch={dispatch} />
        );
      })}
    </div>
  );
}
