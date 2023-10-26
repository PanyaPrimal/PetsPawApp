import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isFavourite: false,
	favouriteId: null,
};

const isFavouriteSlice = createSlice({
	name: "isFavourite",
	initialState,
	reducers: {
		setIsFavourite: (
			state,
			action,
		) => {
			state.isFavourite = action.payload.value;
			state.favouriteId = action.payload.id;
		},
	},
});

export const { setIsFavourite } = isFavouriteSlice.actions;
export default isFavouriteSlice.reducer;
