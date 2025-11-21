import { games } from "@/db/games";
import { createSlice } from "@reduxjs/toolkit";
import { InitialGameState } from "./types";

const initialState: InitialGameState = {
	currentCategory: "All",
	items: games,
};

const GameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		setGameCategory: (state, action) => {
			state.currentCategory = action.payload;
		},

		setGameItems: (state, action) => {
			state.items = action.payload;
		},

		resetItems: (state) => {
			state.items = games;
		},

		resetCategory: (state) => {
			state.currentCategory = "All";
		},
	},
});

export const { setGameCategory, setGameItems, resetItems, resetCategory } =
	GameSlice.actions;

export default GameSlice.reducer;
