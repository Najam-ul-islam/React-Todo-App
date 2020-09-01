import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const Increment = () => {
    dispatch({ type: ACTION.INCREMENT });
  };
  const Decrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <button type="button" onClick={Increment}>
        Plus
      </button>
      <span>{state.count}</span>
      <button type="button" onClick={Decrement}>
        Minus
      </button>
    </div>
  );
}
