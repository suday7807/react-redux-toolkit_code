import { createReducer, createAction } from "@reduxjs/toolkit";

const Increment = createAction("Increment");
const IncrementBy25 = createAction("IncrementBy25");
const Decrement = createAction("Decrement");

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Increment, (state, action) => {
      state.c = state.c + 1;
    })
    .addCase(IncrementBy25, (state, action) => {
      state.c = state.c + 25;
    })
    .addCase(Decrement, (state, action) => {
      state.c = state.c - 1;
    });
});


