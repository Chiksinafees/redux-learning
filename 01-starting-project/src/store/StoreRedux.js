import { createStore } from "redux";

const reducerFunction = (currState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: currState.counter + 1,
    };
  }
  if (action.type === "incrementby5") {
    return {
      counter: currState.counter + 5,
    };
  }

  if (action.type === "decrementby5") {
    return {
      counter: currState.counter - 5,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: currState.counter - 1,
    };
  }

  return currState;
};

const store = createStore(reducerFunction);

export default store;
