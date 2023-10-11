import { configureStore } from "@reduxjs/toolkit";
import userLogSlice from "./reducers/userLogSlice";
import burgerSlice from "./reducers/burgerSlice";

const store = configureStore({
  reducer: {
    userLog: userLogSlice,
    burger: burgerSlice,
  },
});

export default store;