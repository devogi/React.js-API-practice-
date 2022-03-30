import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state,act) {},
    decrement(state,act) {},
    addBy(state,act) {},
  },
});
