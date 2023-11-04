import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const customReducer = createReducer(
  initialState ,
  {
    Increment: (state) => {
      state.c = state.c + 1;
    },

    IncrementByValue: (state, action) => {
      state.c = state.c + action.payload;
    },

    Decrement: (state) => {
      state.c = state.c - 1;
    },
  }
);
