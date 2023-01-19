import { createStore } from "redux"

const reducerFunction=(currState={counter:0},action)=>{
  if(action.type==="increment") {
    return {
        counter:currState.counter+1
    }
  }
  if(action.type==="INCREMENTBY2") {
    return {
        counter:currState.counter+2
    }
  }

  if(action.type==="DECREMENTBY2") {
    return {
        counter:currState.counter+2
    }
  }

  if(action.type==="decrement") {
    return {
        counter:currState.counter-1
    }
  }

  return currState
}

const store=redux.createStore(reducerFunction)

export default store