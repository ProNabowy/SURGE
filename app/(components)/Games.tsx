"use client";

import { GameCard } from "@/components";
import { CATEGORIES } from "@/db/categories";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Games() {
	const store = useSelector((store: RootState) => store.game);

	const { items } = store;
	console.log(items);
	return (
		<main className="container">
			<section
				aria-labelledby="games-category"
				className="flex flex-col gap-10 py-10"
			>
				{CATEGORIES.map((category) => {
					const data = items.filter((game) => game.category === category);
					console.log(data);
					if (!data.length) return <></>;

					return (
						<div key={category} className="flex flex-col gap-5">
							<header>
								<h2 id="games-category" className="shadow-text">
									{category}
								</h2>
							</header>

							<ul className="grid grid-cols-7 gap-3">
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
