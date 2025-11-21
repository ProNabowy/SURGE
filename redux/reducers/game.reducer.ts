import { games } from "@/db/games";
import { createSlice } from "@reduxjs/toolkit";
import { InitialGameState } from "./types";

const initialState: InitialGameState = {
	currentCategory: "All",
	items: games,
	searchQuery: "",
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

		resetGamesItems: (state) => {
			state.items = games;
			state.currentCategory = "All";
			state.searchQuery = "";
		},

		gameSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

export const { setGameCategory, setGameItems, resetGamesItems, gameSearchQuery } =
	GameSlice.actions;

export default GameSlice.reducer;
