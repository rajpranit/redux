import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 1, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counfter = state.counter + action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = { counter: 1 }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: true,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: true,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: true,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
