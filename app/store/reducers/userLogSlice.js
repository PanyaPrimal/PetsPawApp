import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const initialState = {
	logs: [],
};

const userLogSlice = createSlice({
	name: "userLog",
	initialState,
	reducers: {
		setLog: (state, action) => {
			const log = {
				id: uuid(),
				createdAt: action.payload.createdAt,
				imageId: action.payload.imageId,
				message: action.payload.message,
				value: action.payload.value,
			};

			if (state.logs.length >= 4) {
				state.logs.shift();
			}
			state.logs.push(log);
		},
	},
});

export const { setLog } = userLogSlice.actions;
export default userLogSlice.reducer;
