"use client";

import { GameCard } from "@/components";
import { CATEGORIES } from "@/db/categories";
import { resetGamesItems } from "@/redux/reducers/game.reducer";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Games() {
	const store = useSelector((store: RootState) => store.game);

	const { items, searchQuery } = store;

	const dispatch = useDispatch();

	if (!items.length)
		return (
			<header className="mb-10 flex flex-col gap-3">
				<h3 className="text-center font-bold text-white sm:text-white/40 capitalize">
					No results matched your query {searchQuery}
				</h3>
				<button
					onClick={() => dispatch(resetGamesItems())}
					className="transition shadow-[0_0_50px_#9832fd] w-fit mx-auto text-white py-3 px-10 rounded-lg bg-[#ff2c9c]"
				>
					Reset Filter
				</button>
			</header>
		);

	return (
		<main className="container">
			<section
				aria-labelledby="games-category"
				className="flex flex-col gap-10 py-10"
			>
				{CATEGORIES.map((category) => {
					const data = items.filter((game) => game.category === category);

					if (!data.length) return <></>;

					return (
						<div key={category} className="flex flex-col gap-5">
							<header>
								<h2
									id="games-category"
									className="shadow-text lg:text-4xl sm:text-3xl text-2xl"
								>
									{category}
								</h2>
							</header>

							<ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
								{data.map((game, index) => (
									<GameCard game={game} key={index} />
								))}
							</ul>
						</div>
					);
				})}
			</section>
		</main>
	);
}
