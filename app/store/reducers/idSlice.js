import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const initialState = {
	id: typeof window !== "undefined" ? localStorage.getItem("id") : undefined,
};

const idSlice = createSlice({
	name: "id",
	initialState,
	reducers: {
		generateId: (state) => {
			if (state.id === null) {
				state.id = uuid();
				localStorage.setItem("id", state.id);
			}
		},
	},
});

export const { generateId } = idSlice.actions;
export default idSlice.reducer;
