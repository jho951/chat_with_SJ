import { createSlice } from "@reduxjs/toolkit";

export const addListSlice = createSlice({
  name: "addList",
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPost } = addListSlice.actions;

export default addListSlice.reducer;
