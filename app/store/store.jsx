import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./reducers/burgerSlice";

const store = configureStore({
  reducer: {
    burger: burgerSlice,
  },
});

export default store;