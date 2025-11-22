import { games } from "@/db/games";
import {
	gameSearchQuery,
	setGameCategory,
	setGameItems,
} from "@/redux/reducers/game.reducer";
import { RootState } from "@/redux/store";
import { appConstants } from "@/utils/helpers/constants";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useFilter() {
	const store = useSelector((store: RootState) => store.game);

	const dispatch = useDispatch();

	const { currentCategory, searchQuery, items } = store;

	const onCategoryChange = (category: string) => {
		dispatch(setGameCategory(category));

		if (category === appConstants.CATEGORIES_ALL_KEY)
			return dispatch(setGameItems(games));

		dispatch(setGameItems(games.filter((game) => game.category === category)));
	};

	// in case if the search comes from backend or other source we gonna use debounce
	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		dispatch(
			setGameItems(
				games.filter((game) => {
					const matchesTitle = game.title
						.toLowerCase()
						.includes(value.toLowerCase());

					const matchesCategory =
						currentCategory === appConstants.CATEGORIES_ALL_KEY ||
						game.category === currentCategory;

					return matchesTitle && matchesCategory;
				})
			)
		);

		dispatch(gameSearchQuery(value));
	};

	return {
		currentCategory,
		onSearch,
		onCategoryChange,
		searchQuery,
	};
}
