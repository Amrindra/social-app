import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";

const store = configureStore({
  reducer: {
    theme: darkModeReducer
  }
});

export default store;
