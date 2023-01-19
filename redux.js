

const redux = require("redux"); // import redux

const reducerFunction = (currState = { counter: 0 }, action) => {
  console.log(action);
  return(action.type==='increment'? 
  {counter : currState.counter + 1}
    : {counter :currState.counter - 1})
};

const store = redux.createStore(reducerFunction)

const subscriberFunction = () => {
  const latestState = store.getState();  //give latest state after update
  console.log(latestState);
};

store.subscribe(subscriberFunction);
store.dispatch({ type: "decrement" }); // dispatch action
store.dispatch({ type: "decrement" }); // dispatch action
store.dispatch({ type: "decrement" }); // dispatch action
store.dispatch({ type: "increment" }); // dispatch action

