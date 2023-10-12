import { configureStore } from "@reduxjs/toolkit";
import userLogSlice from "./reducers/userLogSlice";
import burgerSlice from "./reducers/burgerSlice";
import isFavouriteSlice from "./reducers/isFavouriteSlice";

const store = configureStore({
  reducer: {
    userLog: userLogSlice,
    burger: burgerSlice,
    isFavourite: isFavouriteSlice,
  },
});

export default store;