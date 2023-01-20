import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice=createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(currState) {
      currState.counter++;
    },
    decrement(currState) {
      currState.counter--;
    },
    increaseby2(currState, action) {
      currState.counter = currState.counter + action.payload;
    },
    toggle(currState) {
      currState.showCounter = !currState.showCounter;
    },
  },
});

const initialAuthState= {authentication:false}

const authSlice=createSlice({
  name:'authentication',
  initialState:initialAuthState,
  reducers:{
    login(currState){
      currState.authentication=true
    },
    logout(currState){
currState.authentication=false
    }
  }
})

const store = configureStore({
    reducer : {counter:counterSlice.reducer,auth:authSlice.reducer}
});

export const authActions=authSlice.actions
export const counterActions =counterSlice.actions
export default store;
