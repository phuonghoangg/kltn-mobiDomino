import { configureStore } from "@reduxjs/toolkit";
import blaReducer from "./blaSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bla: blaReducer,
  },
});
