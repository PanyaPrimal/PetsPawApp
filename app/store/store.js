import { configureStore } from "@reduxjs/toolkit";
import userLogSlice from "./reducers/userLogSlice";
import burgerSlice from "./reducers/burgerSlice";
import isFavouriteSlice from "./reducers/isFavouriteSlice";
import idSlice from "./reducers/idSlice";
import modalSlice from "./reducers/modalSlice";

const store = configureStore({
  reducer: {
    userLog: userLogSlice,
    burger: burgerSlice,
    isFavourite: isFavouriteSlice,
    id: idSlice,
    modal: modalSlice,
  },
});

export default store;