import { configureStore } from "@reduxjs/toolkit";

import addListReducer from "../features/create/addListSlice";

export default configureStore({
  reducer: {
    addList: addListReducer,
  },
});
