import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isBurgerOpen: false,
};

const burgerSlice = createSlice({
	name: "burger",
	initialState,
	reducers: {
		openBurger: (state) => {
			state.isBurgerOpen = true;
		},
		closeBurger: (state) => {
			state.isBurgerOpen = false;
		},
	},
});

export const { openBurger, closeBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
