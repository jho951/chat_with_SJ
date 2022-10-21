import { createSlice } from "@reduxjs/toolkit";

export const addListSlice = createSlice({
  name: "addList",
  initialState: [{ title: "와우", content: "hello!" }],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addList } = addListSlice.actions;

export default addListSlice.reducer;
